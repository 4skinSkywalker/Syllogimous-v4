import { FORMS, SYL_IMMEDIATE_INFERENCES, SYL_KINDS, SYL_TRUE_CONCLUSIONS, SYL_TRUE_CONCLUSIONS_KEYS, VALID_RULES } from "../constants/syllogism.constants";
import { Settings } from "../models/settings.models";
import { PolysyllogismResult, SylKind, SylPremise } from "../models/syllogism.models";
import { pickUniqueItems } from "./question.utils";

//    ____  __    ____     _____________   ____________  ___  __________  ____ 
//   / __ \/ /   / __ \   / ____/ ____/ | / / ____/ __ \/   |/_  __/ __ \/ __ \
//  / / / / /   / / / /  / / __/ __/ /  |/ / __/ / /_/ / /| | / / / / / / /_/ /
// / /_/ / /___/ /_/ /  / /_/ / /___/ /|  / /___/ _, _/ ___ |/ / / /_/ / _, _/ 
// \____/_____/_____/   \____/_____/_/ |_/_____/_/ |_/_/  |_/_/  \____/_/ |_|  
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

export function getSyllogism(settings: Settings, s: string, p: string, m: string, rule: string) {

    const _forms = (!settings.enabled.negation)
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

//     _   _________       __   _____________   ____________  ___  __________  ____ 
//    / | / / ____/ |     / /  / ____/ ____/ | / / ____/ __ \/   |/_  __/ __ \/ __ \
//   /  |/ / __/  | | /| / /  / / __/ __/ /  |/ / __/ / /_/ / /| | / / / / / / /_/ /
//  / /|  / /___  | |/ |/ /  / /_/ / /___/ /|  / /___/ _, _/ ___ |/ / / /_/ / _, _/ 
// /_/ |_/_____/  |__/|__/   \____/_____/_/ |_/_____/_/ |_/_/  |_/_/  \____/_/ |_|  
function sylNegate(premise: SylPremise): SylPremise {
    const [a, k, b] = premise;
    const map: Record<SylKind, SylPremise> = {
        "all":      [a, "some_not", b],
        "no":       [a, "some",     b],
        "some":     [a, "no",       b],
        "some_not": [a, "all",      b],
    };
    return map[k];
}

function sylUnion<T>(a: Set<T>, b: Set<T>): Set<T> {
    const r = new Set(a);
    for (const x of b) r.add(x);
    return r;
}

function sylIntersect<T>(a: Set<T>, b: Set<T>): Set<T> {
    const r = new Set<T>();
    for (const x of a) if (b.has(x)) r.add(x);
    return r;
}

function sylIsConsistent(premises: SylPremise[]): boolean {
    const terms = new Set<string>();
    for (const [a, , b] of premises) { terms.add(a); terms.add(b); }
    if (!terms.size) return true;

    const subset = new Map<string, Set<string>>();
    const disjoint = new Map<string, Set<string>>();
    for (const t of terms) {
        subset.set(t, new Set([t]));
        disjoint.set(t, new Set());
    }
    for (const [a, k, b] of premises) {
        if (k === "all") subset.get(a)!.add(b);
        else if (k === "no") { disjoint.get(a)!.add(b); disjoint.get(b)!.add(a); }
    }

    // Transitive closure of subset
    let changed = true;
    while (changed) {
        changed = false;
        for (const x of terms) {
            const sx = subset.get(x)!;
            const initial = sx.size;
            const extra = new Set<string>();
            for (const y of sx) for (const z of subset.get(y)!) extra.add(z);
            for (const z of extra) sx.add(z);
            if (sx.size > initial) changed = true;
        }
    }

    // Propagate disjointness through subset and symmetrize
    changed = true;
    while (changed) {
        changed = false;
        for (const x of terms) {
            const dx = disjoint.get(x)!;
            const initial = dx.size;
            const extra = new Set<string>();
            for (const y of subset.get(x)!) for (const z of disjoint.get(y)!) extra.add(z);
            for (const z of extra) dx.add(z);
            if (dx.size > initial) changed = true;
        }
        for (const x of terms) for (const y of disjoint.get(x)!) {
            const dy = disjoint.get(y)!;
            if (!dy.has(x)) { dy.add(x); changed = true; }
        }
    }

    // Existential import: a term must not be subset+disjoint of itself
    for (const t of terms) {
        if (sylIntersect(subset.get(t)!, disjoint.get(t)!).size) return false;
    }

    for (const [a, k, b] of premises) {
        if (k === "some") {
            const mustIn = sylUnion(subset.get(a)!, subset.get(b)!);
            const mustOut = sylUnion(disjoint.get(a)!, disjoint.get(b)!);
            if (sylIntersect(mustIn, mustOut).size) return false;
        } else if (k === "some_not") {
            const mustIn = subset.get(a)!;
            const mustOut = sylUnion(disjoint.get(a)!, new Set([b]));
            if (sylIntersect(mustIn, mustOut).size) return false;
        }
    }
    return true;
}

function sylEntails(premises: SylPremise[], conclusion: SylPremise): boolean {
    return !sylIsConsistent([...premises, sylNegate(conclusion)]);
}

function sylApplySyllogism(
    premisesDict: Record<string, Record<string, SylKind>>,
    figure: string,
    word1: string, word2: string, word3: string,
    kind1: SylKind, kind2: SylKind, kind3: SylKind,
    addKind1: boolean,
): [string, string, SylKind] {
    const setPair = (a: string, b: string, k: SylKind) => {
        if (!premisesDict[a]) premisesDict[a] = {};
        premisesDict[a][b] = k;
    };
    switch (figure) {
        case "1": // M-P, S-M => S-P
            if (addKind1) setPair(word1, word2, kind1);
            setPair(word3, word1, kind2);
            return [word3, word2, kind3];
        case "2": // P-M, S-M => S-P
            if (addKind1) setPair(word1, word2, kind1);
            setPair(word3, word2, kind2);
            return [word3, word1, kind3];
        case "3": // M-P, M-S => S-P
            if (addKind1) setPair(word1, word2, kind1);
            setPair(word1, word3, kind2);
            return [word3, word2, kind3];
        case "4": // P-M, M-S => S-P
            if (addKind1) setPair(word1, word2, kind1);
            setPair(word2, word3, kind2);
            return [word3, word1, kind3];
        default:
            throw new Error("Invalid figure: " + figure);
    }
}

function sylDictToList(premisesDict: Record<string, Record<string, SylKind>>): SylPremise[] {
    const out: SylPremise[] = [];
    for (const a of Object.keys(premisesDict)) {
        for (const b of Object.keys(premisesDict[a])) {
            out.push([a, premisesDict[a][b], b]);
        }
    }
    return out;
}

function sylRandPick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function sylShuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function sylPairKey([a, , b]: SylPremise): string {
    return a < b ? `${a}|${b}` : `${b}|${a}`;
}

function* sylShortPremisePaths(
    premises: SylPremise[],
    w1: string,
    w2: string,
    maxLen: number,
): Generator<number[]> {
    const adj = new Map<string, { idx: number; other: string }[]>();
    premises.forEach((p, idx) => {
        const [a, , b] = p;
        if (!adj.has(a)) adj.set(a, []);
        if (!adj.has(b)) adj.set(b, []);
        adj.get(a)!.push({ idx, other: b });
        adj.get(b)!.push({ idx, other: a });
    });

    const usedEdge = new Set<number>();
    const usedNode = new Set<string>([w1]);
    const stack: number[] = [];

    function* dfs(node: string): Generator<number[]> {
        if (node === w2 && stack.length > 0) { yield stack.slice(); return; }
        if (stack.length >= maxLen) return;
        for (const { idx, other } of (adj.get(node) || [])) {
            if (usedEdge.has(idx)) continue;
            if (usedNode.has(other) && other !== w2) continue;
            usedEdge.add(idx); usedNode.add(other); stack.push(idx);
            yield* dfs(other);
            stack.pop(); usedNode.delete(other); usedEdge.delete(idx);
        }
    }
    yield* dfs(w1);
}

function sylHasShorterProof(
    premises: SylPremise[],
    conclusion: SylPremise,
    chainDepth: number,
): boolean {
    const [w1, , w2] = conclusion;
    for (const idxs of sylShortPremisePaths(premises, w1, w2, chainDepth - 1)) {
        const subset = idxs.map(i => premises[i]);
        if (sylEntails(subset, conclusion)) return true;
    }
    return false;
}

function sylRelationDeterminableShort(
    premises: SylPremise[],
    w1: string,
    w2: string,
    chainDepth: number,
): boolean {
    for (const idxs of sylShortPremisePaths(premises, w1, w2, chainDepth - 1)) {
        const subset = idxs.map(i => premises[i]);
        for (const [a, b] of [[w1, w2], [w2, w1]]) {
            for (const k of SYL_KINDS) {
                if (sylEntails(subset, [a, k, b])) return true;
            }
        }
    }
    return false;
}

export function generatePolysyllogism(opts: {
    nPremises: number;
    chainDepth: number;
    termPool: string[];
    trueConclusion: boolean;
}): PolysyllogismResult {
    const { nPremises, chainDepth, termPool, trueConclusion } = opts;

    if (chainDepth < 1) throw new Error("chainDepth must be >= 1");
    if (chainDepth > nPremises) throw new Error("chainDepth must be <= nPremises");

    const chainTermsNeeded = chainDepth + 1;
    const numDistractors = nPremises - chainDepth;
    if (termPool.length < chainTermsNeeded) {
        throw new Error("not enough terms in termPool");
    }

    while (true) {
        const pool = sylShuffle([...termPool]);
        const chainTerms = pool.slice(0, chainTermsNeeded);
        const distractorTerms = pool;

        const premisesDict: Record<string, Record<string, SylKind>> = {};
        let w1: string, w2: string, conclusion: SylKind;
        let failed = false;

        if (chainDepth === 1) {
            const [wA, wB] = chainTerms;
            const inf = sylRandPick(SYL_IMMEDIATE_INFERENCES);
            premisesDict[wA] = { [wB]: inf.kind };
            w1 = inf.swap ? wB : wA;
            w2 = inf.swap ? wA : wB;
            conclusion = inf.conclKind;
        } else {
            const [word1, word2, word3, ...otherWords] = chainTerms;

            const initKey = sylRandPick(SYL_TRUE_CONCLUSIONS_KEYS);
            const [k1, k2, fig] = initKey.split(",") as [SylKind, SylKind, string];
            const k3 = sylRandPick(SYL_TRUE_CONCLUSIONS[initKey]);

            [w1, w2, conclusion] = sylApplySyllogism(
                premisesDict, fig, word1, word2, word3,
                k1, k2, k3, true,
            );

            for (let i = 0; i < chainDepth - 2; i++) {
                const newWord = otherWords[i];
                const kind1 = conclusion;

                const variants: [SylKind, string, SylKind][] = [];
                for (const key of SYL_TRUE_CONCLUSIONS_KEYS) {
                    const [pK1, pK2, pFig] = key.split(",") as [SylKind, SylKind, string];
                    if (pK1 !== kind1) continue;
                    for (const k3i of SYL_TRUE_CONCLUSIONS[key]) {
                        variants.push([pK2, pFig, k3i]);
                    }
                }
                if (variants.length === 0) { failed = true; break; }

                const [kind2, figure_i, kind3] = sylRandPick(variants);
                [w1, w2, conclusion] = sylApplySyllogism(
                    premisesDict, figure_i, w1, w2, newWord,
                    kind1, kind2, kind3, false,
                );
            }
        }
        if (failed) continue;
        let finalConclusion: SylPremise = [w1!, conclusion!, w2!];

        const distractorPremises: SylPremise[] = [];
        const chainPremises = sylDictToList(premisesDict);
        const seenKeys = new Set<string>(chainPremises.map(sylPairKey));
        let dFailed = false;
        for (let i = 0; i < numDistractors; i++) {
            let placed = false;
            for (let tries = 0; tries < 200; tries++) {
                let i1: string, i2: string;
                do {
                    i1 = sylRandPick(distractorTerms);
                    i2 = sylRandPick(distractorTerms);
                } while (i1 === i2 || (!chainTerms.includes(i1) && !chainTerms.includes(i2)));
                const trial: SylPremise = [i1, sylRandPick(SYL_KINDS), i2];

                const key = sylPairKey(trial);
                if (seenKeys.has(key)) continue;

                const current = [...chainPremises, ...distractorPremises];
                if (sylEntails(current, trial)) continue;
                if (!sylIsConsistent([...current, trial])) continue;
                if (sylHasShorterProof([...current, trial], finalConclusion, chainDepth)) continue; // strict chainDepth [true conclusion]

                distractorPremises.push(trial);
                seenKeys.add(key);
                placed = true;
                break;
            }
            if (!placed) { dFailed = true; break; }
        }
        if (dFailed) continue;

        const premises: SylPremise[] = [
            ...sylDictToList(premisesDict),
            ...distractorPremises,
        ];
        let conclusionIsTrue = true;

        if (premises.length !== nPremises) continue;
        if (!sylIsConsistent(premises)) continue;
        if (!sylEntails(premises, finalConclusion)) continue;

        if (!trueConclusion) {
            const [cl, ck, cr] = finalConclusion;
            const alternatives: SylPremise[] = [];
            for (const k of SYL_KINDS) {
                for (const [a, b] of [[cl, cr], [cr, cl]] as [string, string][]) {
                    if (a === cl && b === cr && k === ck) continue;
                    const alt: SylPremise = [a, k, b];
                    if (sylEntails(premises, alt)) continue;
                    if (sylRelationDeterminableShort(premises, a, b, chainDepth)) continue; // strict chainDepth [false conclusion]
                    alternatives.push(alt);
                }
            }
            finalConclusion = alternatives.length
                ? sylRandPick(alternatives)
                : sylNegate(finalConclusion);
            conclusionIsTrue = false;
        }

        sylShuffle(premises);

        if (!sylIsConsistent(premises)) {
            console.log("Internal: premises are inconsistent");
            continue;
        }
        if (conclusionIsTrue) {
            if (!sylEntails(premises, finalConclusion)) {
                console.log("Internal: true conclusion not entailed");
                continue;
            }
        }
        else {
            if (sylEntails(premises, finalConclusion)) {
                console.log("Internal: false conclusion is entailed");
                continue;
            }
            if (sylRelationDeterminableShort(premises, w1, w2, chainDepth)) { // strict chainDepth [false conclusion]
                continue;
            }
        }

        return { premises, conclusion: finalConclusion, conclusionIsTrue };
    }
}

export function formatSylPremise([a, k, b]: SylPremise, negated = false): string {
    const A = `<span class="subject">${a}</span>`;
    const B = `<span class="subject">${b}</span>`;

    if (!negated) {
        switch (k) {
            case "all":      return `All ${A} is ${B}`;
            case "no":       return `No ${A} is ${B}`;
            case "some":     return `Some ${A} is ${B}`;
            case "some_not": return `Some ${A} is not ${B}`;
        }
    } else {
        switch (k) {
            case "all":      return `<span class="is-negated">No</span> ${A} is ${B}`;
            case "no":       return `<span class="is-negated">All</span> ${A} is ${B}`;
            case "some":     return `Some ${A} <span class="is-negated">is not</span> ${B}`;
            case "some_not": return `Some ${A} <span class="is-negated">is</span> ${B}`;
        }
    }
}