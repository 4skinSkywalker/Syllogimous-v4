import { DIRECTION_COORDS, DIRECTION_COORDS_3D, DIRECTION_NAMES, DIRECTION_NAMES_3D, DIRECTION_NAMES_3D_INVERSE_TEMPORAL, DIRECTION_NAMES_3D_TEMPORAL, FORMS, NOUNS, STRINGS, TIME_NAMES, VALID_RULES } from "../constants/engine.constants";
import { EnumQuestionType, Question } from "../models/question.models";
import { Settings, Picked } from "../models/settings.models";

export const b2n = (b: boolean) => +b as number;

export function genBinKey(booleans: boolean[]) {
    return booleans.map(value => (value ? '1' : '0')).join('');
}

export function coinFlip() {
    return Math.random() > 0.5;
}

export function pickUniqueItems<T>(array: T[], n: number): Picked<T> {
    const copy = [...array];
    const picked = [];
    while (n > 0) {
        const rnd = Math.floor(Math.random() * copy.length);
        picked.push(copy.splice(rnd, 1)[0]);
        n--;
    }
    return { picked, remaining: copy };
}

export function shuffle<T>(array: T[]) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export function getDirectionString(x: number, y: number, z: number, isTemporal = false) {
    let res = "";

    if (z === 0) {
        if (x === 0 && y === 0) {
            res = isTemporal ? "in the present and in the same location" : "";
        } else {
            res = isTemporal ? "in the present" : "";
        }
    }

    if (z === 1) {
        res = isTemporal ? "in the future" : "above";
    }
    if (z === -1) {
        res = isTemporal ? "in the past" : "below";
    }

    if ((z || isTemporal) && (x || y)) {
        res += " and ";
    }

    if (y === 1) {
        res += "North";
    }
    if (y === -1) {
        res += "South";
    }
    if (y && x) {
        res += "-";
    }
    if (x === 1) {
        res += "East";
    }
    if (x === -1) {
        res += "West";
    }
    return res;
}

export function findDirection(aCoord: [number, number], bCoord: [number, number]) {
    const x = aCoord[0];
    const y = aCoord[1];
    const x2 = bCoord[0];
    const y2 = bCoord[1];

    const dx = ((x - x2) / Math.abs(x - x2)) || 0;
    const dy = ((y - y2) / Math.abs(y - y2)) || 0;

    const dirIndex = DIRECTION_COORDS.findIndex(c => c[0] === dx && c[1] === dy);
    const dirName = DIRECTION_NAMES[dirIndex];

    return dirName!;
}

export function findDirection3D(aCoord: [number, number, number], bCoord: [number, number, number], isTemporal = false) {
    const x = aCoord[0];
    const y = aCoord[1];
    const z = aCoord[2];
    const x2 = bCoord[0];
    const y2 = bCoord[1];
    const z2 = bCoord[2];

    const dx = ((x - x2) / Math.abs(x - x2)) || 0;
    const dy = ((y - y2) / Math.abs(y - y2)) || 0;
    const dz = ((z - z2) / Math.abs(z - z2)) || 0;

    const dirIndex = DIRECTION_COORDS_3D.findIndex(c => c[0] === dx && c[1] === dy && c[2] === dz);
    const dirName = (isTemporal ? DIRECTION_NAMES_3D_TEMPORAL : DIRECTION_NAMES_3D)[dirIndex];
    return dirName;
}

export function findDirection4D(aCoord: [number, number, number, number], bCoord: [number, number, number, number]) {
    const a = aCoord[3];
    const a2 = bCoord[3];

    return {
        spatial: findDirection3D(aCoord as any, bCoord as any),
        temporal: TIME_NAMES[Math.sign(a-a2) + 1]
    };
}

export function getRandomRuleValid() {
    return VALID_RULES[Math.floor(Math.random() * VALID_RULES.length)];
}

export function getRandomRuleInvalid() {
    let rule;
    while (!rule || VALID_RULES.includes(rule)) {
        rule = "";
        for (let i = 0; i < 3; i++) {
            rule += Math.floor(Math.random() * 4); // Form
        }
        rule += 1 + Math.floor(Math.random() * 4); // Figure
    }
    return rule;
}

export function extractSubjects(phrase: string) {
    return [...phrase.matchAll(/<span class="subject">(.*?)<\/span>/g)].map(a => a[1]);
}

export function isPremiseLikeConclusion(premises: string[], conclusion: string) {
    const subjectsOfPremises = premises.map(p => extractSubjects(p));
    const subjectsOfConclusion = extractSubjects(conclusion);
    for (const subjects of subjectsOfPremises) {
        const toCompare = subjectsOfConclusion[0]+subjectsOfConclusion[1];
        if (subjects[0]+subjects[1] === toCompare || subjects[1]+subjects[0] === toCompare)
            return true;
    }
    return false;
}

export function getSymbols(settings: Settings) {
    return settings.enableMeaningfulWords ? [...NOUNS] : [...STRINGS];
}

export function getRandomSymbols(settings: Settings, length: number) {
    const symbols = getSymbols(settings);
    const seen = new Set();
    return Array(length).fill(0)
            .map(() => {
                let rnd = Math.floor(Math.random() * symbols.length);
                while (seen.has(rnd)) {
                    rnd = Math.floor(Math.random() * symbols.length);
                }
                seen.add(rnd);
                return symbols[rnd];
            });
}

export function getSyllogism(settings: Settings, s: string, p: string, m: string, rule: string) {
    
    const _forms = (!settings.enableNegation)
        ? FORMS[0]
        : pickUniqueItems(FORMS, 1).picked[0];

    let major = _forms[+rule[0]];
    let minor = _forms[+rule[1]];
    let conclusion = _forms[+rule[2]];

    const figure = +rule[3];
    switch (figure) {
        case 1:
            major = major.replace("$", m);
            major = major.replace("$", p);
            minor = minor.replace("$", s);
            minor = minor.replace("$", m);
            break;
        case 2:
            major = major.replace("$", p);
            major = major.replace("$", m);
            minor = minor.replace("$", s);
            minor = minor.replace("$", m);
            break;
        case 3:
            major = major.replace("$", m);
            major = major.replace("$", p);
            minor = minor.replace("$", m);
            minor = minor.replace("$", s);
            break;
        case 4:
            major = major.replace("$", p);
            major = major.replace("$", m);
            minor = minor.replace("$", m);
            minor = minor.replace("$", s);
            break;
    }

    conclusion = conclusion.replace("$", s);
    conclusion = conclusion.replace("$", p);

    return [major, minor, conclusion];
}

export function getMetaReplacer(settings: Settings, choosenPair: Picked<string>, relations: string[], negations: boolean[]) {
    const choosenSubjects = [...choosenPair.picked[0].matchAll(/<span class="subject">(.*?)<\/span>/g)];
    const [a, b] = choosenSubjects.map(m => m[1]);

    const isSameAs = (relations[0] === relations[1]) === (negations[0] === negations[1]);
    const relation = getRelation(settings, EnumQuestionType.Distinction, isSameAs);

    return `$1 ${relation} (<span class="subject">${a}</span> to <span class="subject">${b}</span>) to `;
}

export function getRelation(settings: Settings, type: EnumQuestionType, isPositive: boolean) {
    let positive = "";
    let negative = "";

    switch (type) {
        case EnumQuestionType.Distinction:
            positive = "same as";
            negative = "opposite of";
            break;
        case EnumQuestionType.ComparisonNumerical:
            positive = "more than";
            negative = "less than";
            break;
        case EnumQuestionType.ComparisonChronological:
            positive = "after";
            negative = "before";
            break;
    }

    let relation = isPositive ? positive : negative;
    if (settings.enableNegation && coinFlip()) {
        switch (relation) {
            case positive:
                relation = `<span class="is-negated">${negative}</span>`;
                break;
            case negative:
                relation = `<span class="is-negated">${positive}</span>`;
                break;
        }
    }
    return relation;
}

export function makeMetaRelationsOld(settings: Settings, question: Question, length: number) {
    if (settings.enableMeta && coinFlip()) {
        const numOfMetaRelations = 1 + Math.floor(Math.random() * Math.floor((length - 1) / 2));
        question.metaRelations += numOfMetaRelations;
        let _premises = pickUniqueItems(question.premises, numOfMetaRelations * 2);
        question.premises = [ ..._premises.remaining ];
    
        while (_premises.picked.length) {
            const choosenPair = pickUniqueItems(_premises.picked, 2);
            const negations = choosenPair.picked.map(p => /is-negated/.test(p));
            const relations = choosenPair.picked.map(p => p.match(/is (?:<span class="is-negated">)*(.*?)(?:<\/span>)* /)![1]);
    
            const replacer = getMetaReplacer(settings, choosenPair, relations, negations);
            const newPremise = choosenPair.picked[1].replace(/(is) (.*)(?=<span class="subject">)/, replacer);
    
            question.premises.push(choosenPair.picked[0], newPremise);
    
            _premises = { picked: choosenPair.remaining, remaining: [] };
        }
    }
}

export function makeMetaRelationsNew(settings: Settings, question: Question) {
    // Substitute a variable number of premises with meta-relations
    if (settings.enableMeta && coinFlip()) {
        const numOfMetaRelationships = 1 + Math.floor(Math.random() * Math.floor((length - 1) / 2));
        question.metaRelations += numOfMetaRelationships;
        
        let subjects: { value: number, subject: string }[] = [];
        if (question.type === EnumQuestionType.Distinction) {
            subjects = question.buckets.reduce((a, c, i) => [ ...a, ...c.map(b => ({ value: i, subject: b[0] })) ], [] as typeof subjects);        
        } else {
            subjects = question.bucket.map((c, i, a) => ({ value: (a.length - i), subject: c }), []);
        }
        
        const { picked: pickedPremises, remaining: remainingPremises } = pickUniqueItems(question.premises, numOfMetaRelationships);
        const pickedPremisesSubjects = pickedPremises.map(extractSubjects);
        const remainingPremisesSubjects = remainingPremises.map(extractSubjects);
        const bidirectionalRelationshipMap = remainingPremisesSubjects.reduce((acc, [a, b]) => (acc[a] = acc[a] || [], acc[a].push(b), acc[b] = acc[b] || [], acc[b].push(a), acc), {} as {[key: string]: string[]});
        const newPremises = [];
        for (const premiseSubjects of pickedPremisesSubjects) {
            const [ a, b ] = premiseSubjects.map(ps => subjects.find(s => ps === s.subject)!);
            const { picked } = pickUniqueItems(Object.entries(bidirectionalRelationshipMap), 1);
            let _c = "";
            let _d = "";
            if (picked[0][1].length > 1) { // Indirect relation
                _c = picked[0][1][0];
                _d = picked[0][1][1];
            } else {
                _c = picked[0][0]; // Direct relation
                _d = picked[0][1][0];
            }
            const c = subjects.find(s => s.subject === _c)!;
            const d = subjects.find(s => s.subject === _d)!;
            
            let isSame = false;
            if (question.type === EnumQuestionType.Distinction) {
                isSame = (a.value === b.value) === (c.value === d.value);
            } else { 
                isSame = (a.value < b.value) === (c.value < d.value);
            }

            if (isSame) { // Same
                if (settings.enableNegation && coinFlip()) {
                    newPremises.push(`<span class="subject">${a.subject}</span> to <span class="subject">${b.subject}</span> has the <span class="is-negated">same</span> relation as <span class="subject">${c.subject}</span> to <span class="subject">${d.subject}</span>`);
                } else {
                    newPremises.push(`<span class="subject">${a.subject}</span> to <span class="subject">${b.subject}</span> has the same relation as <span class="subject">${c.subject}</span> to <span class="subject">${d.subject}</span>`);
                }
            } else { // Different
                if (settings.enableNegation && coinFlip()) {
                    newPremises.push(`<span class="subject">${a.subject}</span> to <span class="subject">${b.subject}</span> has a <span class="is-negated">different</span> relation as <span class="subject">${c.subject}</span> to <span class="subject">${d.subject}</span>`);
                } else {
                    newPremises.push(`<span class="subject">${a.subject}</span> to <span class="subject">${b.subject}</span> has a different relation as <span class="subject">${c.subject}</span> to <span class="subject">${d.subject}</span>`);
                }
            }
        }

        newPremises.push(...remainingPremises);
        question.premises = newPremises;
    }
}