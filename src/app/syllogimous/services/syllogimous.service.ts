import { Injectable } from "@angular/core";
import { Question } from "../models/question.models";
import { alterArrangementWithMetaRelations, coinFlip, extractSubjects, findDirection, findDirection3D, findDirection4D, getRandomRuleInvalid, getRandomRuleValid, getRandomSymbols, getRelation, getSyllogism, getSymbols, isPremiseLikeConclusion, makeMetaRelationsNew, pickUniqueItems, randomlyReverseFewSubjectsInArrangement, shuffle } from "../utils/engine.utils";
import { DIRECTION_COORDS, DIRECTION_COORDS_3D, DIRECTION_NAMES, DIRECTION_NAMES_3D, DIRECTION_NAMES_3D_INVERSE, DIRECTION_NAMES_3D_INVERSE_TEMPORAL, DIRECTION_NAMES_3D_TEMPORAL, DIRECTION_NAMES_INVERSE, TIME_NAMES, TIME_NAMES_INVERSE } from "../constants/engine.constants";
import { EnumScreens, EnumTiers, TIER_SCORE_ADJUSTMENTS, TIER_SCORE_RANGES, TIER_SETTINGS } from "../constants/syllogimous.constants";
import { LS_DONT_SHOW, LS_HISTORY, LS_SCORE, LS_TIMER } from "../constants/local-storage.constants";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalLevelChangeComponent } from "../components/modal-level-change/modal-level-change.component";
import { Router } from "@angular/router";
import { canGenerateQuestion, QuestionSettings, Settings } from "../models/settings.models";
import { DailyProgressService } from "./daily-progress.service";
import { guid } from "src/app/utils/uuid";
import { EnumArrangementRelations, EnumQuestionType } from "../constants/question.constants";
import { EnumQuestionGroup } from "../constants/settings.constants";

@Injectable({
    providedIn: "root"
})
export class SyllogimousService {
    _score = 0;
    history: Question[] = [];
    question = this.createSyllogism(2);
    playgroundSettings?: Settings;

    get score() {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
        localStorage.setItem(LS_SCORE, JSON.stringify(value));
    }

    get tier() {
        for (const tier of Object.values(EnumTiers)) {
            const range = TIER_SCORE_RANGES[tier];
            if (this.score >= range.minScore && this.score <= range.maxScore) {
                return tier as EnumTiers;
            }
        }
        return EnumTiers.Adept;
    }

    get settings() {
        return this.playgroundSettings || TIER_SETTINGS[this.tier]; // Playground settings override normal settings
    }

    get questionsFromLS() {
        let questions: Question[] = [];
        const history = localStorage.getItem(LS_HISTORY);
        if (history) {
            questions = JSON.parse(history);
        }
        return questions;
    }

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private dailyProgressService: DailyProgressService
    ) {
        this.loadScore();
        this.loadHistory();
        (window as any).syllogimous = this;
    }

    loadScore() {
        const lsScore = localStorage.getItem(LS_SCORE);
        if (lsScore) {
            this.score = JSON.parse(lsScore);
        }
    }

    loadHistory() {
        const lsHistory = localStorage.getItem(LS_HISTORY);
        if (lsHistory) {
            this.history = JSON.parse(lsHistory);
        }
    }

    pushIntoHistory(question: Question) {
        this.history = [ question, ...this.history ];
        localStorage.setItem(LS_HISTORY, JSON.stringify(this.history));
    }

    /** Given question type and number of premises, returns a question creator function */
    getCreateFn(questionType: EnumQuestionType, qtyPremises: number) {
        return {
            [EnumQuestionType.Distinction]: () => this.createDistinction(qtyPremises),
            [EnumQuestionType.Syllogism]: () => this.createSyllogism(qtyPremises),
            [EnumQuestionType.Analogy]: () => this.createAnalogy(qtyPremises),
            [EnumQuestionType.Binary]: () => this.createBinary(qtyPremises),
            [EnumQuestionType.ComparisonNumerical]: () => this.createComparison(qtyPremises, EnumQuestionType.ComparisonNumerical),
            [EnumQuestionType.ComparisonChronological]: () => this.createComparison(qtyPremises, EnumQuestionType.ComparisonChronological),
            [EnumQuestionType.LinearArrangement]: () => this.createLinearArrangement(qtyPremises),
            [EnumQuestionType.CircularArrangement]: () => this.createCircularArrangement(qtyPremises),
            [EnumQuestionType.Direction]: () => this.createDirection(qtyPremises),
            [EnumQuestionType.Direction3DSpatial]: () => this.createDirection3D(qtyPremises, EnumQuestionType.Direction3DSpatial),
            [EnumQuestionType.Direction3DTemporal]: () => this.createDirection3D(qtyPremises, EnumQuestionType.Direction3DTemporal),
            [EnumQuestionType.Direction4D]: () => this.createDirection4D(qtyPremises),
        }[questionType];
    }

    /** Return a random question based on the current settings */
    createRandomQuestion(numOfPremises?: number, basic?: boolean) {
        const settings = this.settings;

        const typeSettingTuples =  Object.entries(settings.question) as [EnumQuestionType, QuestionSettings][];
        const getQuestionGroup = (qg?: EnumQuestionGroup) => typeSettingTuples.filter(([qt, qs]) => qs.group == qg);
        const groupsOfQuestions = [
            getQuestionGroup(undefined),
            getQuestionGroup(EnumQuestionGroup.Comparison),
            getQuestionGroup(EnumQuestionGroup.Direction),
            getQuestionGroup(EnumQuestionGroup.Arrangement),
        ];

        const choices: Array<() => Question> = [];

        // Pick one question from each group so that the distribution is uniform
        // The "isUndefinedGroup" predicate is used to push all ungrouped question into choices
        for (const grouped of groupsOfQuestions) {
            const isUndefinedGroup = grouped === groupsOfQuestions[0];
            const groupChoices: Array<() => Question> = isUndefinedGroup ? choices : [];
            for (const [qt, qs] of grouped) {
                const shouldIncludeQuestion = (basic == undefined) ? true : qs.basic === basic;
                if (qs.enabled && shouldIncludeQuestion) {
                    groupChoices.push(this.getCreateFn(qt, qs.clampNumOfPremises(numOfPremises || qs.getNumOfPremises())));
                }
            }
            if (!isUndefinedGroup && groupChoices.length) {
                choices.push(pickUniqueItems(groupChoices, 1).picked[0]);
            }
        }

        if (!choices.length) {
            console.warn("NO CHOICES AVAILABLE!");
        }
    
        const randomQuestion = pickUniqueItems(choices, 1).picked[0]();
        console.log("Generated random question", randomQuestion);
        return randomQuestion;
    }

    skipIntro(dontShowAnymore: boolean) {
        if (dontShowAnymore) {
            localStorage.setItem(LS_DONT_SHOW + EnumScreens.Intro, "1")
        }
        this.router.navigate([EnumScreens.Start]);
    }

    play() {
        this.question = this.createRandomQuestion();
        if (this.playgroundSettings) {
            this.router.navigate([EnumScreens.Game]);
        } else {
            if (!localStorage.getItem(LS_DONT_SHOW + this.question.type)) {
                this.router.navigate([EnumScreens.Tutorial, this.question.type]);
            } else {
                this.router.navigate([EnumScreens.Game]);
            }
        }
    }

    playArcadeMode() {
        this.playgroundSettings = undefined;
        this.play();
    }

    skipTutorial(dontShowAnymore: boolean) {
        if (dontShowAnymore) {
            localStorage.setItem(LS_DONT_SHOW + this.question.type, "1")
        }
        this.router.navigate([EnumScreens.Game]);
    }

    checkQuestion(value?: boolean) {
        this.question.userAnswer = value;
        this.question.answeredAt = Date.now();
        this.question.timerTypeOnAnswer = localStorage.getItem(LS_TIMER) || "0";
        this.question.playgroundMode = this.settings === this.playgroundSettings;

        // Playground doesn't progress points
        if (!this.question.playgroundMode) {
            const currTier = this.tier;
    
            let ds = 0;
            if (this.question.userAnswer === this.question.isValid) {
                this.score += TIER_SCORE_ADJUSTMENTS[this.tier].increment;
                ds += 1;
            } else {
                this.score = Math.max(0, this.score - TIER_SCORE_ADJUSTMENTS[this.tier].decrement);
                if (this.score !== 0) {
                    ds -= 1;
                }
            }
    
            this.question.userScore = this.score;
    
            const nextTier = this.tier;
    
            // Level up/down
            if (currTier !== nextTier) {
                const modalRef = this.modalService.open(ModalLevelChangeComponent, { centered: true });
                if (ds > 0) { // level up
                    modalRef.componentInstance.title = "Congratulations\nYou've Leveled Up!";
                    modalRef.componentInstance.content = "Your hard work is paying off.\nKeep going to unlock more features and rewards!";
                } else if (ds < 0) { // level down
                    modalRef.componentInstance.title = "Level Down\nLet's Regroup!";
                    modalRef.componentInstance.content = "Take this as a learning step.\nRefocus your efforts and you’ll be back on top in no time!";
                }
            }
        }

        this.pushIntoHistory(this.question);

        this.dailyProgressService.setDailyProgressLS(
            this.dailyProgressService.getToday(),
            this.question.answeredAt - this.question.createdAt
        );

        this.router.navigate([EnumScreens.Feedback]);
    }

    createSyllogism(numOfPremises: number) {
        console.log("createSyllogism");

        const type = EnumQuestionType.Syllogism;
        const settings = this.settings;

        if (!canGenerateQuestion(type, numOfPremises, settings)) {
            throw new Error("Cannot generate.");
        }
    
        const length = numOfPremises + 1;
        const question = new Question(type);
        question.isValid = coinFlip();

        do {
            question.rule = question.isValid ? getRandomRuleValid() : getRandomRuleInvalid();
            question.bucket = getRandomSymbols(settings, length);
            question.premises = [];

            [
                question.premises[0],
                question.premises[1],
                question.conclusion
            ] = getSyllogism(
                settings,
                question.bucket[0],
                question.bucket[1],
                question.bucket[2],
                question.isValid ? getRandomRuleValid() : getRandomRuleInvalid()
            );
        } while(isPremiseLikeConclusion(question.premises, question.conclusion));

        for (let i = 3; i < length; i++) {
            const rnd = Math.floor(Math.random() * (i - 1));
            const flip = coinFlip();
            const [ p, m ] = flip ? [question.bucket[i], question.bucket[rnd]] : [question.bucket[rnd], question.bucket[i]];
            question.premises.push(getSyllogism(settings, "#####", p, m, getRandomRuleInvalid())[0]);
        }
    
        shuffle(question.premises);
    
        return question;
    }

    createDistinction(numOfPremises: number) {
        console.log("createDistinction");

        const type = EnumQuestionType.Distinction;
        const settings = this.settings;

        if (!canGenerateQuestion(type, numOfPremises, settings)) {
            throw new Error("Cannot generate.");
        }

        const length = numOfPremises + 1;
        const symbols = getRandomSymbols(settings, length);
        const question = new Question(type);

        do {
            const rnd = Math.floor(Math.random() * symbols.length);
            const first = symbols.splice(rnd, 1)
            let prev = first;
            let curr: string[] = [];
    
            question.buckets = [[prev], []];
            let prevBucket = 0;
    
            question.premises = [];

            for (let i = 0; i < length - 1; i++) {
                const rnd = Math.floor(Math.random() * symbols.length);
                curr = symbols.splice(rnd, 1);

                const isSameAs = coinFlip();
                const relation = getRelation(settings, type, isSameAs);

                question.premises.push(`<span class="subject">${prev}</span> is ${relation} <span class="subject">${curr}</span>`);

                if (!isSameAs) {
                    prevBucket = (prevBucket + 1) % 2;
                }

                question.buckets[prevBucket].push(curr);
    
                prev = curr;
            }

            makeMetaRelationsNew(settings, question, length);
            
            const isSameAs = coinFlip();
            const relation = getRelation(settings, type, isSameAs);

            question.conclusion = `<span class="subject">${first}</span> is ${relation} <span class="subject">${curr}</span>`;
            question.isValid = isSameAs
                ? question.buckets[0].includes(curr)
                : question.buckets[1].includes(curr);
        } while(isPremiseLikeConclusion(question.premises, question.conclusion));
    
        shuffle(question.premises);
    
        return question;
    }

    createComparison(numOfPremises: number, type: EnumQuestionType.ComparisonNumerical | EnumQuestionType.ComparisonChronological) {
        console.log("createComparison");
        
        const settings = this.settings;

        if (!canGenerateQuestion(type, numOfPremises, settings)) {
            throw new Error("Cannot generate.");
        }

        const length = numOfPremises + 1;
        const question = new Question(type);

        do {
            question.bucket = getRandomSymbols(settings, length);
            question.premises = [];
            const sign = [-1, 1][Math.floor(Math.random() * 2)];

            let next = "";
    
            for (let i = 0; i < length - 1; i++) {
                const curr = question.bucket[i];
                next = question.bucket[i + 1];

                const isMoreOrAfter = coinFlip();
                const [first, last] = ((sign === 1) === isMoreOrAfter) ? [next, curr] : [curr, next];
                const relation = getRelation(settings, type, isMoreOrAfter);

                question.premises.push(`<span class="subject">${first}</span> is ${relation} <span class="subject">${last}</span>`);
            }

            makeMetaRelationsNew(settings, question, length);

            const a = Math.floor(Math.random() * question.bucket.length);
            let b = Math.floor(Math.random() * question.bucket.length);
            while (a === b) {
                b = Math.floor(Math.random() * question.bucket.length);
            }

            const isMoreOrAfter = coinFlip();
            const relation = getRelation(settings, type, isMoreOrAfter);

            question.conclusion = `<span class="subject">${question.bucket[a]}</span> is ${relation} <span class="subject">${question.bucket[b]}</span>`;
            question.isValid = isMoreOrAfter
                ? sign === 1 && a > b || sign === -1 && a < b
                : sign === 1 && a < b || sign === -1 && a > b;
        } while(isPremiseLikeConclusion(question.premises, question.conclusion));
    
        shuffle(question.premises);
    
        return question;
    }

    createDirection(qtyPremises: number) {
        console.log("createDirection");

        const type = EnumQuestionType.Direction;
        const settings = this.settings;

        if (!canGenerateQuestion(type, qtyPremises, settings)) {
            throw new Error("Cannot generate.");
        }

        const length = qtyPremises + 1;
        const symbols = getSymbols(settings);
        const words = pickUniqueItems(symbols, length).picked;
        const question = new Question(type);

        let wordCoordMap: Record<string, [number, number]> = {};
        let conclusionSubjects = ["", ""];
        let conclusionDirection = "";

        while (!conclusionDirection) {
            wordCoordMap = {};
            question.wordCoordMap = wordCoordMap;
            question.premises = [];
    
            for (let i = 0; i < words.length - 1; i++) {
                const dirIndex = 1 + Math.floor(Math.random()*(DIRECTION_NAMES.length - 1));
                const dirName = DIRECTION_NAMES[dirIndex]!;
                const dirCoord = DIRECTION_COORDS[dirIndex];

                if (i === 0) {
                    wordCoordMap[words[i]] = [0,0];
                }

                wordCoordMap[words[i+1]] = [
                    wordCoordMap[words[i]][0] + dirCoord[0], // x
                    wordCoordMap[words[i]][1] + dirCoord[1]  // y
                ];

                if (settings.enabled.negation && coinFlip()) {
                    question.negations++;
                    if (coinFlip()) {
                        question.premises.push(`<span class="subject">${words[i+1]}</span> is <span class="is-negated">${(DIRECTION_NAMES_INVERSE as any)[dirName]}</span> of <span class="subject">${words[i]}</span>`);
                    } else {
                        question.premises.push(`<span class="subject">${words[i]}</span> is <span class="is-negated">${dirName}</span> of <span class="subject">${words[i+1]}</span>`);
                    }
                } else {
                    if (coinFlip()) {
                        question.premises.push(`<span class="subject">${words[i+1]}</span> is ${dirName} of <span class="subject">${words[i]}</span>`);
                    } else {
                        question.premises.push(`<span class="subject">${words[i]}</span> is ${(DIRECTION_NAMES_INVERSE as any)[dirName]} of <span class="subject">${words[i+1]}</span>`);
                    }
                }
            }

            const { picked: pickedPremises } = pickUniqueItems(question.premises, 2);
            const premisesSubjects = pickedPremises.map(extractSubjects);

            while (conclusionSubjects[0] === conclusionSubjects[1]) {
                const [ a, b ] = premisesSubjects.reduce((acc, curr) => [ ...acc, pickUniqueItems(curr, 1).picked[0] ], [] as string[]);
                if (premisesSubjects.find(([ c, d ]) => c + d === a + b || d + c === a + b)) {
                    continue;
                }
                conclusionSubjects[0] = a;
                conclusionSubjects[1] = b;
            }

            const aCoords = wordCoordMap[conclusionSubjects[0]];
            const bCoords = wordCoordMap[conclusionSubjects[1]];

            question.isValid = coinFlip();
            conclusionDirection = (question.isValid)
                ? findDirection(aCoords, bCoords)
                : findDirection(bCoords, aCoords);
        }

        if (settings.enabled.negation && coinFlip()) {
            question.negations++;
            if (coinFlip()) {
                question.conclusion = `<span class="subject">${conclusionSubjects[0]}</span> is <span class="is-negated">${(DIRECTION_NAMES_INVERSE as any)[conclusionDirection]}</span> of <span class="subject">${conclusionSubjects[1]}</span>`;
            } else {
                question.conclusion = `<span class="subject">${conclusionSubjects[1]}</span> is <span class="is-negated">${conclusionDirection}</span> of <span class="subject">${conclusionSubjects[0]}</span>`;
            }
        } else {
            if (coinFlip()) {
                question.conclusion = `<span class="subject">${conclusionSubjects[0]}</span> is ${conclusionDirection} of <span class="subject">${conclusionSubjects[1]}</span>`;
            } else {
                question.conclusion = `<span class="subject">${conclusionSubjects[1]}</span> is ${(DIRECTION_NAMES_INVERSE as any)[conclusionDirection]} of <span class="subject">${conclusionSubjects[0]}</span>`;
            }
        }
    
        shuffle(question.premises);
        
        return question;
    }

    createDirection3D(numOfPremises: number, type: EnumQuestionType.Direction3DSpatial | EnumQuestionType.Direction3DTemporal) {
        console.log("createDirection3D");
        
        const settings = this.settings;

        if (!canGenerateQuestion(type, numOfPremises, settings)) {
            throw new Error("Cannot generate.");
        }

        const length = numOfPremises + 1;
        const symbols = getSymbols(settings);
        const words = pickUniqueItems(symbols, length).picked;
        const question = new Question(type);
        const isTemporal = type === EnumQuestionType.Direction3DTemporal;
        const [ direction_names, direction_names_inverse ] = isTemporal
            ? [ DIRECTION_NAMES_3D_TEMPORAL, DIRECTION_NAMES_3D_INVERSE_TEMPORAL ]
            : [ DIRECTION_NAMES_3D, DIRECTION_NAMES_3D_INVERSE ];
    
        let wordCoordMap: Record<string, [number, number, number]> = {};
        let conclusionSubjects = ["", ""];
        let conclusionDirection = "";

        while (!conclusionDirection) {
            wordCoordMap = {};
            question.wordCoordMap = wordCoordMap;
            question.premises = [];
    
            for (let i = 0; i < words.length - 1; i++) {
                const dirIndex = 1 + Math.floor(Math.random() * (direction_names.length - 1));
                const dirName = direction_names[dirIndex];
                const dirCoord = DIRECTION_COORDS_3D[dirIndex];

                if (i === 0) {
                    wordCoordMap[words[i]] = [0,0,0];
                }

                wordCoordMap[words[i+1]] = [
                    wordCoordMap[words[i]][0] + dirCoord[0], // x
                    wordCoordMap[words[i]][1] + dirCoord[1], // y
                    wordCoordMap[words[i]][2] + dirCoord[2], // z
                ];

                if (settings.enabled.negation && coinFlip()) {
                    question.negations++;
                    if (coinFlip()) {
                        question.premises.push(`<span class="subject">${words[i+1]}</span> is <span class="is-negated">${(direction_names_inverse as any)[dirName]}</span> of <span class="subject">${words[i]}</span>`);
                    } else {
                        question.premises.push(`<span class="subject">${words[i]}</span> is <span class="is-negated">${dirName}</span> of <span class="subject">${words[i+1]}</span>`);
                    }
                } else {
                    if (coinFlip()) {
                        question.premises.push(`<span class="subject">${words[i+1]}</span> is ${dirName} of <span class="subject">${words[i]}</span>`);
                    } else {
                        question.premises.push(`<span class="subject">${words[i]}</span> is ${(direction_names_inverse as any)[dirName]} of <span class="subject">${words[i+1]}</span>`);
                    }
                }
            }

            const { picked: pickedPremises } = pickUniqueItems(question.premises, 2);
            const premisesSubjects = pickedPremises.map(extractSubjects);

            while (conclusionSubjects[0] === conclusionSubjects[1]) {
                const [ a, b ] = premisesSubjects.reduce((acc, curr) => [ ...acc, pickUniqueItems(curr, 1).picked[0] ], [] as string[]);
                if (premisesSubjects.find(([ c, d ]) => c + d === a + b || d + c === a + b)) {
                    continue;
                }
                conclusionSubjects[0] = a;
                conclusionSubjects[1] = b;
            }

            const aCoords = wordCoordMap[conclusionSubjects[0]];
            const bCoords = wordCoordMap[conclusionSubjects[1]];

            question.isValid = coinFlip();
            conclusionDirection = (question.isValid)
                ? findDirection3D(aCoords, bCoords, isTemporal)
                : findDirection3D(bCoords, aCoords, isTemporal);
        }

        if (settings.enabled.negation && coinFlip()) {
            question.negations++;
            if (coinFlip()) {
                question.conclusion = `<span class="subject">${conclusionSubjects[0]}</span> is <span class="is-negated">${(direction_names_inverse as any)[conclusionDirection]}</span> of <span class="subject">${conclusionSubjects[1]}</span>`;
            } else {
                question.conclusion = `<span class="subject">${conclusionSubjects[1]}</span> is <span class="is-negated">${conclusionDirection}</span> of <span class="subject">${conclusionSubjects[0]}</span>`;
            }
        } else {
            if (coinFlip()) {
                question.conclusion = `<span class="subject">${conclusionSubjects[0]}</span> is ${conclusionDirection} of <span class="subject">${conclusionSubjects[1]}</span>`;
            } else {
                question.conclusion = `<span class="subject">${conclusionSubjects[1]}</span> is ${(direction_names_inverse as any)[conclusionDirection]} of <span class="subject">${conclusionSubjects[0]}</span>`;
            }
        }
    
        shuffle(question.premises);
        
        return question;
    }

    createDirection4D(numOfPremises: number) {
        console.log("createDirection4D");

        const type = EnumQuestionType.Direction4D;
        const settings = this.settings;

        if (!canGenerateQuestion(type, numOfPremises, settings)) {
            throw new Error("Cannot generate.");
        }

        const length = numOfPremises + 1;
        const symbols = getSymbols(settings);
        const words = pickUniqueItems(symbols, length).picked;
        const question = new Question(type);
    
        let wordCoordMap: Record<string, [number, number, number, number]> = {};
        let conclusionSubjects = ["", ""];
        let conclusionDirection = { spatial: "", temporal: "" };

        while (!conclusionDirection.spatial) {
            wordCoordMap = {};
            question.wordCoordMap = wordCoordMap;
            question.premises = [];
    
            for (let i = 0; i < words.length - 1; i++) {
                const timeIndex =  pickUniqueItems([-1,0,1], 1).picked[0];
                const timeName = TIME_NAMES[timeIndex + 1];
                const dirIndex = 1 + Math.floor(Math.random()*(DIRECTION_NAMES_3D.length - 1));
                const dirName = DIRECTION_NAMES_3D[dirIndex];
                const dirCoord = DIRECTION_COORDS_3D[dirIndex];

                if (i === 0) {
                    wordCoordMap[words[i]] = [0,0,0,0];
                }

                wordCoordMap[words[i+1]] = [
                    wordCoordMap[words[i]][0] + dirCoord[0], // x
                    wordCoordMap[words[i]][1] + dirCoord[1], // y
                    wordCoordMap[words[i]][2] + dirCoord[2], // z
                    wordCoordMap[words[i]][3] + timeIndex,   // time
                ];

                if (settings.enabled.negation && coinFlip()) {
                    question.negations++;
                    if (coinFlip()) {
                        question.premises.push(`<span class="subject">${words[i+1]}</span> ${timeName} <span class="is-negated">${(DIRECTION_NAMES_3D_INVERSE as any)[dirName]}</span> of <span class="subject">${words[i]}</span>`);
                    } else {
                        question.premises.push(`<span class="subject">${words[i]}</span> ${(TIME_NAMES_INVERSE as any)[timeName]} <span class="is-negated">${dirName}</span> of <span class="subject">${words[i+1]}</span>`);
                    }
                } else {
                    if (coinFlip()) {
                        question.premises.push(`<span class="subject">${words[i+1]}</span> ${timeName} ${dirName} of <span class="subject">${words[i]}</span>`);
                    } else {
                        question.premises.push(`<span class="subject">${words[i]}</span> ${(TIME_NAMES_INVERSE as any)[timeName]} ${(DIRECTION_NAMES_3D_INVERSE as any)[dirName]} of <span class="subject">${words[i+1]}</span>`);
                    }
                }
            }

            const { picked: pickedPremises } = pickUniqueItems(question.premises, 2);
            const premisesSubjects = pickedPremises.map(extractSubjects);

            while (conclusionSubjects[0] === conclusionSubjects[1]) {
                const [ a, b ] = premisesSubjects.reduce((acc, curr) => [ ...acc, pickUniqueItems(curr, 1).picked[0] ], [] as string[]);
                if (premisesSubjects.find(([ c, d ]) => c + d === a + b || d + c === a + b)) {
                    continue;
                }
                conclusionSubjects[0] = a;
                conclusionSubjects[1] = b;
            }

            const aCoords = wordCoordMap[conclusionSubjects[0]];
            const bCoords = wordCoordMap[conclusionSubjects[1]];

            question.isValid = coinFlip();
            conclusionDirection = (question.isValid)
                ? findDirection4D(aCoords, bCoords)
                : findDirection4D(bCoords, aCoords);
        }
        if (settings.enabled.negation && coinFlip()) {
            question.negations++;
            if (coinFlip()) {
                question.conclusion = `<span class="subject">${conclusionSubjects[0]}</span> ${conclusionDirection.temporal} <span class="is-negated">${(DIRECTION_NAMES_3D_INVERSE as any)[conclusionDirection.spatial]}</span> of <span class="subject">${conclusionSubjects[1]}</span>`;
            } else {
                question.conclusion = `<span class="subject">${conclusionSubjects[1]}</span> ${conclusionDirection.temporal} <span class="is-negated">${conclusionDirection.spatial}</span> of <span class="subject">${conclusionSubjects[0]}</span>`;
            }
        } else {
            if (coinFlip()) {
                question.conclusion = `<span class="subject">${conclusionSubjects[0]}</span> ${conclusionDirection.temporal} ${conclusionDirection.spatial} of <span class="subject">${conclusionSubjects[1]}</span>`;
            } else {
                question.conclusion = `<span class="subject">${conclusionSubjects[1]}</span> ${conclusionDirection.temporal} ${(DIRECTION_NAMES_3D_INVERSE as any)[conclusionDirection.spatial]} of <span class="subject">${conclusionSubjects[0]}</span>`;
            }
        }

        shuffle(question.premises);
        
        return question;
    }

    createLinearArrangement(numOfEls: number) {
        console.log("createLinearArrangement");

        numOfEls = Math.max(3, numOfEls);

        const type = EnumQuestionType.LinearArrangement;
        const settings = this.settings;
        const symbols = getSymbols(settings);
        const words = pickUniqueItems(symbols, numOfEls).picked;
        const question = new Question(type);
        question.instructions = `There are ${numOfEls} subjects along a LINEAR path.`;

        /**
         * TODO:
         * 1. Add left/right (w/o steps) to the conclusion (boolean flag in getWays?)
         * 2. Randomly reverse some subjects
         * 3. Alter with meta relationships
         * 4. Integrate with analogy type
         */
        const getWays = (i: number, j: number) => {
            const ways = {
                [EnumArrangementRelations.AdjLeft]: {
                    possible: i+1 === j,
                    steps: 1
                },
                [EnumArrangementRelations.AdjRight]: {
                    possible: i-1 === j,
                    steps: 1
                },
                [EnumArrangementRelations.Next]: {
                    possible: (i+1 === j) || (i-1 === j),
                    steps: 1
                },
                [EnumArrangementRelations.Left]: {
                    possible: i < j - 1,
                    steps: j - i
                },
                [EnumArrangementRelations.Right]: {
                    possible: i > j + 1,
                    steps: i - j
                },
            };

            return ways;
        };
        (question as any)._getWays = getWays; // Used in analogies
        
        let premises: string[][] = [];
        let subjects = [...words];
        let a: string | undefined = undefined;
        for (let safe = 1e2; safe && premises.length < numOfEls-1; safe--) {
            let premise: string[] | undefined = undefined;
            let safe = 1e2;
            for (; safe && premise == undefined; safe--) {
                a = a || pickUniqueItems(subjects, 1).picked[0];
                console.log("a", a);
                const aid = words.indexOf(a);

                const existsAndNotRepeated = (b: string | undefined) => {
                    return b && !premises.find(([_a, _, _b]) => _a === b || _b === b);
                }

                const b = pickUniqueItems(subjects, 1).picked[0];
                console.log("b", b);
                const bid = words.indexOf(b);
                const [ wayDescription, wayData ] = pickUniqueItems(Object.entries(getWays(aid, bid)), 1).picked[0];
                if (wayData.possible && existsAndNotRepeated(b)) {
                    const enrichedWayDescr = wayDescription.replace("#", String(wayData.steps));
                    premise = [a, enrichedWayDescr, b];
                    subjects = subjects.filter(s => s !== a && s !== b)
                    a = b;
                }
            }
            premises.push([...premise!, guid()]);
        }

        randomlyReverseFewSubjectsInArrangement(premises);

        shuffle(premises);

        alterArrangementWithMetaRelations(settings, question, premises);

        let b: string | undefined = undefined;
        for (let safe = 1e2; safe && b == undefined; safe--) {
            const subject = pickUniqueItems(words, 1).picked[0];
            const alreadyRelated = premises.find(([_a, _, _b]) => (_a === a && _b === subject) || (_a === subject && _b === a));
            if (subject !== a && !alreadyRelated) {
                b = subject;
            }
        }
        const [aid, bid] = [words.indexOf(a!), words.indexOf(b!)];
        const ways = getWays(aid, bid);
        console.log(a, b);

        question.isValid = coinFlip();
        const conclusionWayDescriptions = Object.entries(ways)
            .filter(([wayDescription, wayData]) => wayData.possible === question.isValid)
            .map(([wayDescription, wayData]) => wayDescription.replace("#", String(Math.abs(wayData.steps))));
        question.conclusion = `<span class="subject">${a}</span> ${pickUniqueItems(conclusionWayDescriptions, 1).picked[0]} <span class="subject">${b}</span>`;

        question.rule = words.join(", ");
        (question as any).rawPremises = premises;
        question.premises = premises.map(([a, rel, b]) => `<span class="subject">${a}</span> ${rel} <span class="subject">${b}</span>`);

        return question;
    }

    createCircularArrangement(numOfEls: number) {
        console.log("createCircularArrangement");

        numOfEls = Math.max(3, numOfEls);

        const type = EnumQuestionType.CircularArrangement;
        const settings = this.settings;
        const symbols = getSymbols(settings);
        const words = pickUniqueItems(symbols, numOfEls).picked;
        const question = new Question(type);
        question.instructions = `There are ${numOfEls} subjects along a CIRCULAR path.`;

        const getAdjLeft = (i: number) => (numOfEls+(i+1))%numOfEls;
        const getAdjRight = (i: number) => (numOfEls+(i-1))%numOfEls;
        const getInFront = (i: number) => (i+(numOfEls/2))%numOfEls;
        const getWays = (i: number, j: number) => {
            j = (numOfEls+(j-i))%numOfEls;
            i = 0;

            const isAdjLeft = getAdjLeft(i) === j;
            const isAdjRight = getAdjRight(i) === j;
            const isNext = isAdjLeft || isAdjRight;
            const isInFront = getInFront(i) === j;
            const ways = {
                [EnumArrangementRelations.AdjLeft]: isAdjLeft,       // 1 way,
                [EnumArrangementRelations.AdjRight]: isAdjRight,     // 1 way
                [EnumArrangementRelations.Next]: isNext,             // 2 ways
                [EnumArrangementRelations.Left]: j < getInFront(i),  // N/2-1 ways
                [EnumArrangementRelations.Right]: j > getInFront(i), // N/2-1 ways
                [EnumArrangementRelations.InFront]: isInFront,       // 1 way
            };

            // Odd num of els do not make for diametrically opposite els
            if (numOfEls%2 !== 0) {
                delete (ways as any)[EnumArrangementRelations.InFront];
            }

            return ways;
        };
        (question as any)._getWays = getWays; // Used in analogies
        
        let premises: string[][] = [];
        let subjects = [...words];
        let a: string | undefined = undefined;
        for (let safe = 1e2; safe && premises.length < numOfEls-1; safe--) {
            const ways = [];

            const defWays = [EnumArrangementRelations.AdjLeft, EnumArrangementRelations.AdjRight];
            if (numOfEls%2 === 0) { // Even num of els make for diametrically opposite els
                defWays.push(EnumArrangementRelations.InFront);
            }

            ways.push(...defWays);
            if (premises.length > 2) {
                ways.push(EnumArrangementRelations.Next);
            }
            if (premises.length >= subjects.length) {
                ways.push(EnumArrangementRelations.Left, EnumArrangementRelations.Right);
            }

            let premise: string[] | undefined = undefined;
            let safe = 1e2;
            for (; safe && premise == undefined; safe--) {
                a = a || pickUniqueItems(subjects, 1).picked[0];
                // console.log("a", a);
                const aid = words.indexOf(a);

                // It should try to go a def route first...
                if (ways.length === defWays.length) {
                    const bidLeft = getAdjLeft(aid);
                    const bidRight = getAdjRight(aid);
                    const bidFront = getInFront(aid);
                    const bLeft = words[bidLeft];
                    const bRight = words[bidRight];
                    const bFront = words[bidFront];

                    const existsAndNotRepeated = (b: string | undefined) => {
                        return b && !premises.find(([_a, _, _b]) => _a === b || _b === b);
                    }

                    const bWays = [];
                    if (existsAndNotRepeated(bLeft)) {
                        bWays.push([EnumArrangementRelations.AdjLeft, bLeft]);
                    }
                    if (existsAndNotRepeated(bRight)) {
                        bWays.push([EnumArrangementRelations.AdjRight, bRight]);
                    }
                    if (existsAndNotRepeated(bFront) && numOfEls%2 === 0) { // Even num of els make for diametrically opposite els
                        bWays.push([EnumArrangementRelations.InFront, bFront]);
                    }

                    if (bWays.length) {
                        const [ targetWay, b ] = pickUniqueItems(bWays, 1).picked[0];
                        // console.log("b", b);
                        premise = [a, targetWay, b];
                        subjects = subjects.filter(s => s !== a && s !== b);
                        a = b;
                        break;
                    }
                }

                // ...otherwise pick any available route
                const b = pickUniqueItems(subjects, 1).picked[0];
                // console.log("b non-def", b);
                const bid = words.indexOf(b);
                const [ targetWay, canGoThere ] = pickUniqueItems(Object.entries(getWays(aid, bid)), 1).picked[0];
                if (canGoThere) {
                    premise = [a, targetWay, b];
                    subjects = subjects.filter(s => s !== a && s !== b)
                    a = b;
                }
            }
            premises.push([...premise!, guid()]);
        }

        randomlyReverseFewSubjectsInArrangement(premises);

        shuffle(premises);

        alterArrangementWithMetaRelations(settings, question, premises);

        let b: string | undefined = undefined;
        for (let safe = 1e2; safe && b == undefined; safe--) {
            const subject = pickUniqueItems(words, 1).picked[0];
            const alreadyRelated = premises.find(([_a, _, _b]) => (_a === a && _b === subject) || (_a === subject && _b === a));
            if (subject !== a && !alreadyRelated) {
                b = subject;
            }
        }
        const [aid, bid] = [words.indexOf(a!), words.indexOf(b!)];
        const ways = getWays(aid, bid);
        // console.log(a, b);

        question.isValid = coinFlip();
        const conclusionWays = Object.entries(ways).filter(([_, b]) => b === question.isValid).map(x => x[0]);
        question.conclusion = `<span class="subject">${a}</span> ${pickUniqueItems(conclusionWays, 1).picked[0]} <span class="subject">${b}</span>`;

        question.rule = words.join(", ");
        (question as any).rawPremises = premises;
        question.premises = premises.map(([a, rel, b]) => `<span class="subject">${a}</span> ${rel} <span class="subject">${b}</span>`);

        return question;
    }

    createAnalogy(length: number) {
        console.log("createAnalogy");

        const topType = EnumQuestionType.Analogy;
        const settings = this.settings;

        if (!canGenerateQuestion(topType, length, settings)) {
            throw new Error("Cannot generate.");
        }

        const choiceIndices = [];
        if (settings.question[EnumQuestionType.Distinction].enabled) {
            choiceIndices.push(0);
        }

        // Randomly pick one comparison question from the comparison questions enabled
        const comparisonChoices = [];
        if (settings.question[EnumQuestionType.ComparisonNumerical].enabled) {
            comparisonChoices.push(1);
        }
        if (settings.question[EnumQuestionType.ComparisonChronological].enabled) {
            comparisonChoices.push(2);
        }
        if (comparisonChoices.length) {
            choiceIndices.push(pickUniqueItems(comparisonChoices, 1).picked[0]);
        }

        // Randomly pick one direction question from the direction questions enabled
        const directionsChoices = [];
        if (settings.question[EnumQuestionType.Direction].enabled) {
            directionsChoices.push(3);
        }
        if (settings.question[EnumQuestionType.Direction3DSpatial].enabled) {
            directionsChoices.push(4);
        }
        if (settings.question[EnumQuestionType.Direction3DTemporal].enabled) {
            directionsChoices.push(5);
        }
        if (settings.question[EnumQuestionType.Direction4D].enabled) {
            directionsChoices.push(6);
        }
        if (directionsChoices.length) {
            choiceIndices.push(pickUniqueItems(directionsChoices, 1).picked[0]);
        }

        // Randomly pick one arrangement from enabled arrangements
        const arrangementChoices = [];
        if (settings.question[EnumQuestionType.LinearArrangement].enabled) {
            arrangementChoices.push(7);
        }
        if (settings.question[EnumQuestionType.CircularArrangement].enabled) {
            arrangementChoices.push(8);
        }
        if (arrangementChoices.length) {
            choiceIndices.push(pickUniqueItems(arrangementChoices, 1).picked[0]);
        }
    
        const choiceIndex = pickUniqueItems(choiceIndices, 1).picked[0];

        let question = new Question(topType);
        let isValidSame;
        let a, b, c, d;
        let indexOfA, indexOfB, indexOfC, indexOfD;

        const flip = coinFlip();

        switch (choiceIndex) {
            case 0:
                question = this.createDistinction(length);
                question.type = topType;
                question.conclusion = "";
        
                [a, b, c, d] = pickUniqueItems([...question.buckets[0], ...question.buckets[1]], 4).picked;
                question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;

                [
                    indexOfA,
                    indexOfB,
                    indexOfC,
                    indexOfD
                ] = [
                    Number(question.buckets[0].indexOf(a) !== -1),
                    Number(question.buckets[0].indexOf(b) !== -1),
                    Number(question.buckets[0].indexOf(c) !== -1),
                    Number(question.buckets[0].indexOf(d) !== -1)
                ];
                isValidSame = (indexOfA === indexOfB && indexOfC === indexOfD) || (indexOfA !== indexOfB && indexOfC !== indexOfD);
                break;
            case 1:
            case 2:
                const type = (choiceIndex === 1) 
                    ? EnumQuestionType.ComparisonNumerical
                    : EnumQuestionType.ComparisonChronological;
                question = this.createComparison(length, type);
                question.type = topType;
                question.conclusion = "";

                [a, b, c, d] = pickUniqueItems(question.bucket, 4).picked;
                question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;

                [indexOfA, indexOfB] = [question.bucket.indexOf(a), question.bucket.indexOf(b)];
                [indexOfC, indexOfD] = [question.bucket.indexOf(c), question.bucket.indexOf(d)];
                isValidSame = (indexOfA > indexOfB && indexOfC > indexOfD) || (indexOfA < indexOfB && indexOfC < indexOfD);
                break;
            case 3:
                while (flip !== isValidSame) {
                    question = this.createDirection(length);
                    question.type = topType;
                    question.conclusion = "";

                    [a, b, c, d] = pickUniqueItems(Object.keys(question.wordCoordMap), 4).picked;
                    question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;
        
                    const dirA = findDirection(question.wordCoordMap[a] as any, question.wordCoordMap[b] as any);
                    const dirB = findDirection(question.wordCoordMap[c] as any, question.wordCoordMap[d] as any);
                    isValidSame = dirA === dirB;
                }
                break;
            case 4:
            case 5:
                while (flip !== isValidSame) {
                    const type = (choiceIndex === 4) 
                        ? EnumQuestionType.Direction3DSpatial
                        : EnumQuestionType.Direction3DTemporal;
                    const isTemporal = type === EnumQuestionType.Direction3DTemporal;
                    question = this.createDirection3D(length, type);
                    question.type = topType;
                    question.conclusion = "";

                    [a, b, c, d] = pickUniqueItems(Object.keys(question.wordCoordMap), 4).picked;
                    question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;

                    const dirA = findDirection3D(
                        question.wordCoordMap[a] as any,
                        question.wordCoordMap[b] as any,
                        isTemporal
                    );
                    const dirB = findDirection3D(
                        question.wordCoordMap[c] as any,
                        question.wordCoordMap[d] as any,
                        isTemporal
                    );
                    isValidSame = dirA === dirB;
                }
                break;
            case 6:
                while (flip !== isValidSame) {
                    question = this.createDirection4D(length);
                    question.type = topType;
                    question.conclusion = "";

                    [a, b, c, d] = pickUniqueItems(Object.keys(question.wordCoordMap), 4).picked;
                    question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;

                    const { spatial, temporal } = findDirection4D(question.wordCoordMap[a] as any, question.wordCoordMap[b] as any);
                    const { spatial: spatial2, temporal: temporal2 } = findDirection4D(question.wordCoordMap[c] as any, question.wordCoordMap[d] as any);
                    isValidSame = (spatial === spatial2) && (temporal === temporal2);
                }
                break;
            case 7: {
                question = this.createLinearArrangement(length);
                question.type = topType;
                question.conclusion = "";
                
                const subjects = question.rule.split(", ");
                [a, b, c, d] = pickUniqueItems(subjects, 4).picked;
                question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;

                let [ idxA, idxB, idxC, idxD ] = [
                    subjects.indexOf(a),
                    subjects.indexOf(b),
                    subjects.indexOf(c),
                    subjects.indexOf(d)
                ];

                const waysA2B = (question as any)._getWays(idxA, idxB);
                const waysC2D = (question as any)._getWays(idxC, idxD);
                //console.log(subjects);
                //console.log(idxA, idxB, idxC, idxD);

                question.instructions += "<br><b>Note</b>: Proximity makes the relationship alike.";

                isValidSame = false;
                for (const key in waysA2B) {
                    if (waysA2B[key] && waysC2D[key]) {
                        isValidSame = true;
                    }
                }

                break;
            }
            case 8: {
                question = this.createCircularArrangement(length);
                question.type = topType;
                question.conclusion = "";
        
                const subjects = question.rule.split(", ");
                [a, b, c, d] = pickUniqueItems(subjects, 4).picked;
                question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;

                const [ idxA, idxB, idxC, idxD ] = [
                    subjects.indexOf(a),
                    subjects.indexOf(b),
                    subjects.indexOf(c),
                    subjects.indexOf(d)
                ];

                const waysA2B = (question as any)._getWays(idxA, idxB);
                const waysC2D = (question as any)._getWays(idxC, idxD);
                //console.log(subjects);
                //console.log(idxA, idxB, idxC, idxD);

                question.instructions += "<br><b>Note</b>: Proximity and diametrical opposition make the relationship alike.";

                isValidSame = false;
                for (const key in waysA2B) {
                    if (waysA2B[key] && waysC2D[key]) {
                        isValidSame = true;
                    }
                }

                break;
            }
        }

        if (isValidSame === undefined) {
            throw new Error("Shouldn't be here...");
        }

        const isSameRelation = coinFlip();
        question.isValid = isSameRelation ? isValidSame : !isValidSame;

        if (settings.enabled.negation && coinFlip()) {
            question.negations++;
            question.conclusion += `<div class="analogy-conclusion-relation is-negated">is ${isSameRelation ? 'unlinke' : 'alike'}</div>`;
        } else {
            question.conclusion += `<div class="analogy-conclusion-relation">is ${isSameRelation ? 'alike' : 'unlike'}</div>`;
        }

        question.conclusion += `<span class="subject">${c}</span> to <span class="subject">${d}</span>`;
    
        return question;
    }

    createBinary(numOfPremises: number) {
        console.log("createBinary");

        const topType = EnumQuestionType.Binary;
        const settings = this.settings;

        if (!canGenerateQuestion(topType, numOfPremises, settings)) {
            throw new Error("Cannot generate.");
        }

        const operands = [];
        const operandNames = [];
        const operandTemplates = [];
    
        if (settings.enabled.binary.and) {
            operands.push("a&&b");
            operandNames.push("AND");
            operandTemplates.push('$a <div class="is-connector">and</div> $b');
        }
        if (settings.enabled.binary.nand) {
            operands.push("!(a&&b)");
            operandNames.push("NAND");
            operandTemplates.push('$a <div class="is-connector">and</div> $b <div class="is-connector">are not both true</div>');
        }
        if (settings.enabled.binary.or) {
            operands.push("a||b");
            operandNames.push("OR");
            operandTemplates.push('$a <div class="is-connector">or</div> $b');
        }
        if (settings.enabled.binary.nor) {
            operands.push("!(a||b)");
            operandNames.push("NOR");
            operandTemplates.push('$a <div class="is-connector">and</div> $b <div class="is-connector">are both false</div>');
        }
        if (settings.enabled.binary.xor) {
            operands.push("!(a&&b)&&(a||b)");
            operandNames.push("XOR");
            operandTemplates.push('$a <div class="is-connector">differs from</div> $b');
        }
        if (settings.enabled.binary.xnor) {
            operands.push("!(!(a&&b)&&(a||b))");
            operandNames.push("XNOR");
            operandTemplates.push('$a <div class="is-connector">is equal to</div> $b');
        }

        const question = new Question(topType);
        const flip = coinFlip();
        const operandIndex = Math.floor(Math.random()*operands.length);
        const operand = operands[operandIndex];

        let safe = 1e2;
        do {
            const a = this.createRandomQuestion(Math.floor(numOfPremises / 2), true);
            const b = this.createRandomQuestion(Math.ceil(numOfPremises / 2), true);
            const choices = [a, b];

            const fixInstructions = (q: Question) => {
                const htmlify = (rule: string) => rule.split(", ").map(str => `<span class="subject">${str}</span>`).join(", ");
                if (q.type === EnumQuestionType.LinearArrangement) {
                    return htmlify(q.rule) + " are arranged in a LINEAR fashion";
                } else if (q.type === EnumQuestionType.CircularArrangement) {
                    return htmlify(q.rule) + " are arranged in a CIRCULAR fashion";
                } else {
                    return "";
                }
            };

            question.instructions = [fixInstructions(a), fixInstructions(b)].join("<br>");

            question.premises = [...choices[0].premises, ...choices[1].premises];
            shuffle(question.premises);
        
            question.conclusion = operandTemplates[operandIndex]
                .replace("$a", choices[0].conclusion)
                .replace("$b", choices[1].conclusion);

            question.isValid = eval(
                operand
                    .replaceAll("a", String(choices[0].isValid))
                    .replaceAll("b", String(choices[1].isValid))
            );
        } while (safe-- && flip !== question.isValid);

        if (safe <= 0) {
            console.warn("MAXIMUM NUMBER OF ITERATIONS REACHED!");
        }
    
        return question;
    }
}