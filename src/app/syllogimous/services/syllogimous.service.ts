import { Injectable } from "@angular/core";
import { EnumArrangementRelations, EnumQuestionType, Question } from "../models/question.models";
import { alterArrangementWithMetaRelations, coinFlip, extractSubjects, findDirection, findDirection3D, findDirection4D, getRandomRuleInvalid, getRandomRuleValid, getRandomSymbols, getRelation, getSyllogism, getSymbols, isPremiseLikeConclusion, makeMetaRelationsNew, pickUniqueItems, randomlyReverseFewSubjectsInArrangement, shuffle } from "../utils/engine.utils";
import { DIRECTION_COORDS, DIRECTION_COORDS_3D, DIRECTION_NAMES, DIRECTION_NAMES_3D, DIRECTION_NAMES_3D_INVERSE, DIRECTION_NAMES_3D_INVERSE_TEMPORAL, DIRECTION_NAMES_3D_TEMPORAL, DIRECTION_NAMES_INVERSE, TIME_NAMES, TIME_NAMES_INVERSE } from "../constants/engine.constants";
import { EnumScreens, EnumTiers } from "../models/syllogimous.models";
import { TIER_SCORE_ADJUSTMENTS, TIER_SCORE_RANGES, TIER_SETTINGS } from "../constants/syllogimous.constants";
import { LS_DONT_SHOW, LS_HISTORY, LS_SCORE, LS_TIMER } from "../constants/local-storage.constants";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalLevelChangeComponent } from "../components/modal-level-change/modal-level-change.component";
import { Router } from "@angular/router";
import { canGenerateQuestion, Settings } from "../models/settings.models";
import { DailyProgressService } from "./daily-progress.service";
import { guid } from "src/app/utils/uuid";

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

    createQuestion() {
        const settings = this.settings;
    
        const choices = [];
        if (settings.distinction[0]) {
            choices.push(() => this.createDistinction(settings.distinction[1]));
        }
        if (settings.syllogism[0]) {
            choices.push(() => this.createSyllogism(settings.syllogism[1]));
        }
        if (settings.analogy[0]) {
            choices.push(() => this.createAnalogy(settings.analogy[1]));
        }
        if (settings.binary[0]) {
            choices.push(() => this.createBinary(settings.binary[1]));
        }

        const comparisonChoices = [];
        if (settings.comparisonNumerical[0]) {
            comparisonChoices.push(() => this.createComparison(settings.comparisonNumerical[1], EnumQuestionType.ComparisonNumerical));
        }
        if (settings.comparisonChronological[0]) {
            comparisonChoices.push(() => this.createComparison(settings.comparisonChronological[1], EnumQuestionType.ComparisonChronological));
        }
        if (comparisonChoices.length) {
            choices.push(pickUniqueItems(comparisonChoices, 1).picked[0]);
        }

        const directionChoices = [];
        if(settings.direction[0]) {
            directionChoices.push(() => this.createDirection(settings.direction[1]));
        }
        if(settings.direction3DSpatial[0]) {
            directionChoices.push(() => this.createDirection3D(settings.direction3DSpatial[1], EnumQuestionType.Direction3DSpatial));
        }
        if(settings.direction3DTemporal[0]) {
            directionChoices.push(() => this.createDirection3D(settings.direction3DTemporal[1], EnumQuestionType.Direction3DTemporal));
        }
        if(settings.direction4D[0]) {
            directionChoices.push(() => this.createDirection4D(settings.direction4D[1]));
        }
        if (directionChoices.length) {
            choices.push(pickUniqueItems(directionChoices, 1).picked[0]);
        }

        const arrangementQuestions = [];
        if(settings.linearArrangement[0]) {
            arrangementQuestions.push(() => this.createLinearArrangement(settings.linearArrangement[1]));
        }
        if(settings.circularArrangement[0]) {
            arrangementQuestions.push(() => this.createCircularArrangement(settings.circularArrangement[1]));
        }
        if (arrangementQuestions.length) {
            choices.push(pickUniqueItems(arrangementQuestions, 1).picked[0]);
        }
    
        if (!choices.length) {
            return;
        }
    
        const randomQuestion = pickUniqueItems(choices, 1).picked[0]();
        console.log("randomQuestion", randomQuestion);
        this.question = randomQuestion!;
        return this.question;
    }

    skipIntro(dontShowAnymore: boolean) {
        if (dontShowAnymore) {
            localStorage.setItem(LS_DONT_SHOW + EnumScreens.Intro, "1")
        }
        this.router.navigate([EnumScreens.Start]);
    }

    play() {
        this.createQuestion();
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

    createSyllogism(qtaPremises: number) {
        if (!canGenerateQuestion(EnumQuestionType.Syllogism, qtaPremises)) {
            throw new Error("Cannot generate.");
        }
    
        const length = qtaPremises + 1;
        const settings = this.settings;
        const question = new Question(EnumQuestionType.Syllogism);
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

    createDistinction(qtaPremises: number) {
        if (!canGenerateQuestion(EnumQuestionType.Distinction, qtaPremises)) {
            throw new Error("Cannot generate.");
        }

        const length = qtaPremises + 1;
        const settings = this.settings;
        const symbols = getRandomSymbols(settings, length);
        const question = new Question(EnumQuestionType.Distinction);

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
                const relation = getRelation(settings, EnumQuestionType.Distinction, isSameAs);

                question.premises.push(`<span class="subject">${prev}</span> is ${relation} <span class="subject">${curr}</span>`);

                if (!isSameAs) {
                    prevBucket = (prevBucket + 1) % 2;
                }

                question.buckets[prevBucket].push(curr);
    
                prev = curr;
            }

            makeMetaRelationsNew(settings, question, length);
            
            const isSameAs = coinFlip();
            const relation = getRelation(settings, EnumQuestionType.Distinction, isSameAs);

            question.conclusion = `<span class="subject">${first}</span> is ${relation} <span class="subject">${curr}</span>`;
            question.isValid = isSameAs
                ? question.buckets[0].includes(curr)
                : question.buckets[1].includes(curr);
        } while(isPremiseLikeConclusion(question.premises, question.conclusion));
    
        shuffle(question.premises);
    
        return question;
    }

    createComparison(qtaPremises: number, type: EnumQuestionType.ComparisonNumerical | EnumQuestionType.ComparisonChronological) {
        if (!canGenerateQuestion(type, qtaPremises)) {
            throw new Error("Cannot generate.");
        }

        const length = qtaPremises + 1;
        const settings = this.settings;
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

    createDirection(qtaPremises: number) {
        if (!canGenerateQuestion(EnumQuestionType.Direction, qtaPremises)) {
            throw new Error("Cannot generate.");
        }

        const length = qtaPremises + 1;
        const settings = this.settings;
        const symbols = getSymbols(settings);
        const words = pickUniqueItems(symbols, length).picked;
        const question = new Question(EnumQuestionType.Direction);

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

                if (settings.enableNegation && coinFlip()) {
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

        if (settings.enableNegation && coinFlip()) {
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

    createDirection3D(qtaPremises: number, type: EnumQuestionType.Direction3DSpatial | EnumQuestionType.Direction3DTemporal) {
        if (!canGenerateQuestion(type, qtaPremises)) {
            throw new Error("Cannot generate.");
        }

        const length = qtaPremises + 1;
        const settings = this.settings;
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

                if (settings.enableNegation && coinFlip()) {
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

        if (settings.enableNegation && coinFlip()) {
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

    createDirection4D(qtaPremises: number) {
        if (!canGenerateQuestion(EnumQuestionType.Direction4D, qtaPremises)) {
            throw new Error("Cannot generate.");
        }

        const length = qtaPremises + 1;
        const settings = this.settings;
        const symbols = getSymbols(settings);
        const words = pickUniqueItems(symbols, length).picked;
        const question = new Question(EnumQuestionType.Direction4D);
    
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

                if (settings.enableNegation && coinFlip()) {
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
        if (settings.enableNegation && coinFlip()) {
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

    createAnalogy(length: number) {
        const settings = this.settings;
        if (!canGenerateQuestion(EnumQuestionType.Analogy, length, settings)) {
            throw new Error("Cannot generate.");
        }

        const choiceIndices = [];
    
        if (settings.distinction[0]) {
            choiceIndices.push(0);
        }
        if (settings.comparisonNumerical[0]) {
            choiceIndices.push(1);
        }
        if (settings.comparisonChronological[0]) {
            choiceIndices.push(2);
        }
        if (settings.direction[0]) {
            choiceIndices.push(3);
        }
        if (settings.direction3DSpatial[0]) {
            choiceIndices.push(4);
        }
        if (settings.direction3DTemporal[0]) {
            choiceIndices.push(5);
        }
        if (settings.direction4D[0]) {
            choiceIndices.push(6);
        }
    
        const choiceIndex = pickUniqueItems(choiceIndices, 1).picked[0];

        let question = new Question(EnumQuestionType.Analogy);
        let isValidSame;
        let a, b, c, d;
        let indexOfA, indexOfB, indexOfC, indexOfD;

        const flip = coinFlip();

        switch (choiceIndex) {
            case 0:
                question = this.createDistinction(length);
                question.type = EnumQuestionType.Analogy;
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
                const type = (choiceIndex === 1) ? EnumQuestionType.ComparisonNumerical : EnumQuestionType.ComparisonChronological;
                question = this.createComparison(length, type);
                question.type = EnumQuestionType.Analogy;
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
                    question.type = EnumQuestionType.Analogy;
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
                    const type = (choiceIndex === 4) ? EnumQuestionType.Direction3DSpatial : EnumQuestionType.Direction3DTemporal;
                    question = this.createDirection3D(length, type);
                    question.type = EnumQuestionType.Analogy;
                    question.conclusion = "";

                    [a, b, c, d] = pickUniqueItems(Object.keys(question.wordCoordMap), 4).picked;
                    question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;

                    const dirA = findDirection3D(
                        question.wordCoordMap[a] as any,
                        question.wordCoordMap[b] as any,
                        type === EnumQuestionType.Direction3DTemporal
                    );
                    const dirB = findDirection3D(
                        question.wordCoordMap[c] as any,
                        question.wordCoordMap[d] as any,
                        type === EnumQuestionType.Direction3DTemporal
                    );
                    isValidSame = dirA === dirB;
                }
                break;
            case 6:
                while (flip !== isValidSame) {
                    question = this.createDirection4D(length);
                    question.type = EnumQuestionType.Analogy;
                    question.conclusion = "";

                    [a, b, c, d] = pickUniqueItems(Object.keys(question.wordCoordMap), 4).picked;
                    question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;

                    const { spatial, temporal } = findDirection4D(question.wordCoordMap[a] as any, question.wordCoordMap[b] as any);
                    const { spatial: spatial2, temporal: temporal2 } = findDirection4D(question.wordCoordMap[c] as any, question.wordCoordMap[d] as any);
                    isValidSame = (spatial === spatial2) && (temporal === temporal2);
                }
                break;
        }

        if (isValidSame === undefined) {
            throw new Error("Shouldn't be here...");
        }

        const isSameRelation = coinFlip();
        question.isValid = isSameRelation ? isValidSame : !isValidSame;

        if (settings.enableNegation && coinFlip()) {
            question.negations++;
            if (isSameRelation) {
                if (choiceIndex < 1) {
                    question.conclusion += '<div class="analogy-conclusion-relation is-negated">is different from</div>';
                } else {
                    question.conclusion += '<div class="analogy-conclusion-relation is-negated">has a different relation from</div>';
                }
            } else {
                if (choiceIndex < 1) {
                    question.conclusion += '<div class="analogy-conclusion-relation is-negated">is the same as</div>';
                } else {
                    question.conclusion += '<div class="analogy-conclusion-relation is-negated">has the same relation as</div>';
                }
            }
        } else {
            if (isSameRelation) {
                if (choiceIndex < 1) {
                    question.conclusion += '<div class="analogy-conclusion-relation">is the same as</div>';
                } else {
                    question.conclusion += '<div class="analogy-conclusion-relation">has the same relation as</div>';
                }
            } else {
                if (choiceIndex < 1) {
                    question.conclusion += '<div class="analogy-conclusion-relation">is different from</div>';
                } else {
                    question.conclusion += '<div class="analogy-conclusion-relation">has a different relation from</div>';
                }
            }
        }

        question.conclusion += `<span class="subject">${c}</span> to <span class="subject">${d}</span>`;
    
        return question;
    }

    createBinary(length: number) {
        const settings = this.settings;
        if (!canGenerateQuestion(EnumQuestionType.Binary, length, settings)) {
            throw new Error("Cannot generate.");
        }

        const operands = [];
        const operandNames = [];
        const operandTemplates = [];
        const pool = [];
    
        if (settings.enableAnd) {
            operands.push("a&&b");
            operandNames.push("AND");
            operandTemplates.push('$a <div class="is-connector">and</div> $b');
        }
        if (settings.enableNand) {
            operands.push("!(a&&b)");
            operandNames.push("NAND");
            operandTemplates.push('$a <div class="is-connector">and</div> $b <div class="is-connector">are not both true</div>');
        }
        if (settings.enableOr) {
            operands.push("a||b");
            operandNames.push("OR");
            operandTemplates.push('$a <div class="is-connector">or</div> $b');
        }
        if (settings.enableNor) {
            operands.push("!(a||b)");
            operandNames.push("NOR");
            operandTemplates.push('$a <div class="is-connector">and</div> $b <div class="is-connector">are both false</div>');
        }
        if (settings.enableXor) {
            operands.push("!(a&&b)&&(a||b)");
            operandNames.push("XOR");
            operandTemplates.push('$a <div class="is-connector">differs from</div> $b');
        }
        if (settings.enableXnor) {
            operands.push("!(!(a&&b)&&(a||b))");
            operandNames.push("XNOR");
            operandTemplates.push('$a <div class="is-connector">is equal to</div> $b');
        }
    
        if (!operands.length) return;
    
        if (settings.syllogism[0]) {
            pool.push((length: number) =>
                this.createSyllogism(length)
            );
        }
        if (settings.distinction[0]) {
            pool.push((length: number) =>
                this.createDistinction(length)
            );
        }
        if (settings.comparisonNumerical[0]) {
            pool.push((length: number) =>
                this.createComparison(length, EnumQuestionType.ComparisonNumerical)
            );
        }
        if (settings.comparisonChronological[0]) {
            pool.push((length: number) =>
                this.createComparison(length, EnumQuestionType.ComparisonChronological)
            );
        }
        if (settings.direction[0]) {
            pool.push((length: number) =>
                this.createDirection(length)
            );
        }
        if (settings.direction3DSpatial[0]) {
            pool.push((length: number) =>
                this.createDirection3D(length, EnumQuestionType.Direction3DSpatial)
            );
        }
        if (settings.direction3DTemporal[0]) {
            pool.push((length: number) =>
                this.createDirection3D(length, EnumQuestionType.Direction3DTemporal)
            );
        }
        if (settings.direction4D[0]) {
            pool.push((length: number) =>
                this.createDirection4D(length)
            );
        }

        const question = new Question(EnumQuestionType.Binary);
        const flip = coinFlip();
        const operandIndex = Math.floor(Math.random()*operands.length);
        const operand = operands[operandIndex];

        do {
            const picked = pickUniqueItems(pool, 2).picked;
    
            const choices = [
                picked[0](Math.floor(length / 2)),
                picked[1](Math.ceil(length / 2))
            ];
        
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
        } while (flip !== question.isValid);
    
        return question;
    }

    createLinearArrangement(numOfEls: number) {
        const getAdjLeft = (i: number) => i+1;
        const getAdjRight = (i: number) => i-1;

        numOfEls = Math.max(3, numOfEls);

        const getWays = (i: number, j: number) => {
            const isAdjLeft = getAdjLeft(i) === j;
            const isAdjRight = getAdjRight(i) === j;
            const isNext = isAdjLeft || isAdjRight;
            const ways = {
                [EnumArrangementRelations.AdjLeft]: isAdjLeft,       // 1 way,
                [EnumArrangementRelations.AdjRight]: isAdjRight,     // 1 way
                [EnumArrangementRelations.Next]: isNext,             // 2 ways
                [EnumArrangementRelations.Left]: i < j,              // N/2-1 ways
                [EnumArrangementRelations.Right]: i > j,             // N/2-1 ways
            };

            return ways;
        };

        const settings = this.settings;
        const symbols = getSymbols(settings);
        const words = pickUniqueItems(symbols, numOfEls).picked;
        const question = new Question(EnumQuestionType.LinearArrangement);
        question.instructions = `There are ${numOfEls} subjects along a LINEAR path.`;
        // console.log(words);
        
        let premises: string[][] = [];
        let subjects = [...words];
        let a: string | undefined = undefined;
        for (let safe = 1e2; safe && premises.length < numOfEls-1; safe--) {
            const ways = [];

            const defWays = [EnumArrangementRelations.AdjLeft, EnumArrangementRelations.AdjRight];

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
                    const bLeft = words[bidLeft];
                    const bRight = words[bidRight];

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

        alterArrangementWithMetaRelations(settings, premises);

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

    createCircularArrangement(numOfEls: number) {
        const getAdjLeft = (i: number) => (numOfEls+(i+1))%numOfEls;
        const getAdjRight = (i: number) => (numOfEls+(i-1))%numOfEls;
        const getInFront = (i: number) => (i+(numOfEls/2))%numOfEls;

        numOfEls = Math.max(3, numOfEls);

        const getWays = (i: number, j: number) => {
            // Set i to 0 and derive j
            if (i > numOfEls/2) {
                j = numOfEls+((j-i)%numOfEls);
                i = 0;
            }

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
                delete (ways as any)[EnumArrangementRelations.NotInFront];
            }

            return ways;
        };

        const settings = this.settings;
        const symbols = getSymbols(settings);
        const words = pickUniqueItems(symbols, numOfEls).picked;
        const question = new Question(EnumQuestionType.CircularArrangement);
        question.instructions = `There are ${numOfEls} subjects along a CIRCULAR path.`;
        // console.log(words);
        
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

        alterArrangementWithMetaRelations(settings, premises);

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
}