import { FORMS, NOUNS, NUMBER_WORDS, STRINGS, VALID_RULES } from "../constants/question.constants";
import { EnumArrangements, EnumQuestionType } from "../constants/question.constants";
import { IArrangementPremise, IArrangementRelationship, Question } from "../models/question.models";
import { Settings, Picked } from "../models/settings.models";
import { SylKind, SylPremise, PolysyllogismResult } from "../models/question.models";
import { SYL_KINDS, SYL_IMMEDIATE_INFERENCES, SYL_TRUE_CONCLUSIONS, SYL_TRUE_CONCLUSIONS_KEYS } from "../constants/question.constants";

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
        const toCompare = subjectsOfConclusion[0] + subjectsOfConclusion[1];
        if (subjects[0] + subjects[1] === toCompare || subjects[1] + subjects[0] === toCompare)
            return true;
    }
    return false;
}

export function getSymbols(settings: Settings) {
    return settings.enabled.meaningfulWords ? [...NOUNS] : [...STRINGS];
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
    if (settings.enabled.negation && coinFlip()) {
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

export function createMetaRelationships(settings: Settings, question: Question, length: number) {
    // Substitute a variable number of premises with meta-relations
    if (settings.enabled.meta && coinFlip()) {
        const numOfMetaRelationships = 1 + Math.floor(Math.random() * Math.floor((length - 1) / 2));
        question.metaRelations += numOfMetaRelationships;

        let subjects: { value: number, subject: string }[] = [];
        if (question.type === EnumQuestionType.Distinction) {
            subjects = question.buckets.reduce((a, c, i) => [...a, ...c.map(b => ({ value: i, subject: b[0] }))], [] as typeof subjects);
        } else {
            subjects = question.bucket.map((c, i, a) => ({ value: (a.length - i), subject: c }), []);
        }

        const { picked: pickedPremises, remaining: remainingPremises } = pickUniqueItems(question.premises, numOfMetaRelationships);
        const pickedPremisesSubjects = pickedPremises.map(extractSubjects);
        const remainingPremisesSubjects = remainingPremises.map(extractSubjects);
        const bidirectionalRelationshipMap = remainingPremisesSubjects.reduce((acc, [a, b]) => (acc[a] = acc[a] || [], acc[a].push(b), acc[b] = acc[b] || [], acc[b].push(a), acc), {} as { [key: string]: string[] });
        const newPremises = [];
        for (const premiseSubjects of pickedPremisesSubjects) {
            const [a, b] = premiseSubjects.map(ps => subjects.find(s => ps === s.subject)!);
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
                if (settings.enabled.negation && coinFlip()) {
                    newPremises.push(`<span class="subject">${a.subject}</span> relates to <span class="subject">${b.subject}</span> in the <span class="is-negated">opposite</span> way that <span class="subject">${c.subject}</span> relates to <span class="subject">${d.subject}</span>`);
                } else {
                    newPremises.push(`<span class="subject">${a.subject}</span> relates to <span class="subject">${b.subject}</span> in the same way that <span class="subject">${c.subject}</span> relates to <span class="subject">${d.subject}</span>`);
                }
            } else { // Different
                if (settings.enabled.negation && coinFlip()) {
                    newPremises.push(`<span class="subject">${a.subject}</span> relates to <span class="subject">${b.subject}</span> in the <span class="is-negated">same</span> way that <span class="subject">${c.subject}</span> relates to <span class="subject">${d.subject}</span>`);
                } else {
                    newPremises.push(`<span class="subject">${a.subject}</span> relates to <span class="subject">${b.subject}</span> in the opposite way that <span class="subject">${c.subject}</span> relates to <span class="subject">${d.subject}</span>`);
                }
            }
        }

        newPremises.push(...remainingPremises);
        question.premises = newPremises;
    }
}

/** This methods modifies some premises with meta-relationships */
export function metarelateArrangement(premises: IArrangementPremise[]) {
    premises.forEach(premise => {
        premise.metaRelationships = premises
            .filter(p => p.uid !== premise.uid)
            .filter(p => p.relationship.description === premise.relationship.description && p.relationship.steps === premise.relationship.steps);
    });
}

export function horizontalShuffleArrangement(premises: IArrangementPremise[]) {
    const switchSubjects = (premise: IArrangementPremise) =>
        [premise.a, premise.b] = [premise.b, premise.a];

    premises.forEach(premise => {
        if (premise.relationship && coinFlip()) {
            switch (premise.relationship.description) {
                case EnumArrangements.AdjacentLeft: {
                    premise.relationship.description = EnumArrangements.AdjacentRight;
                    switchSubjects(premise);
                    break;
                }
                case EnumArrangements.AdjacentRight: {
                    premise.relationship.description = EnumArrangements.AdjacentLeft;
                    switchSubjects(premise);
                    break;
                }
                case EnumArrangements.NStepsLeft: {
                    premise.relationship.description = EnumArrangements.NStepsRight;
                    switchSubjects(premise);
                    break;
                }
                case EnumArrangements.NStepsRight: {
                    premise.relationship.description = EnumArrangements.NStepsLeft;
                    switchSubjects(premise);
                    break;
                }
                case EnumArrangements.Next: {
                    switchSubjects(premise);
                    break;
                }
                case EnumArrangements.InFront: {
                    switchSubjects(premise);
                    break;
                }
                case EnumArrangements.Left: {
                    premise.relationship.description = EnumArrangements.Right;
                    switchSubjects(premise);
                    break;
                }
                case EnumArrangements.Right: {
                    premise.relationship.description = EnumArrangements.Left;
                    switchSubjects(premise);
                    break;
                }
            }
        }
    });
}

export function getLinearWays(
    i: number,
    j: number,
    _: number,
    forConclusion = false,
    precise = false
) {
    const isAdjLeft = i + 1 === j;
    const isAdjRight = i - 1 === j;
    const isNext = isAdjLeft || isAdjRight;
    const isLeft = i < j;
    const isRight = i > j;
    const steps = Math.abs(i - j);

    const ways: Record<string, { possible: boolean, steps: number }> = {
        [EnumArrangements.AdjacentLeft]: {
            possible: isAdjLeft,
            steps
        },
        [EnumArrangements.AdjacentRight]: {
            possible: isAdjRight,
            steps
        },
        [EnumArrangements.NStepsLeft]: {
            possible: isLeft,
            steps
        },
        [EnumArrangements.NStepsRight]: {
            possible: isRight,
            steps
        },
    };

    if (forConclusion) {
        ways[EnumArrangements.Next] = {
            possible: isNext,
            steps
        };
        if (!precise) {
            ways[EnumArrangements.Left] = {
                possible: isLeft,
                steps: -Infinity
            };
            ways[EnumArrangements.Right] = {
                possible: isRight,
                steps: -Infinity
            };
        }
    }

    return ways;
};

export function getCircularWays(
    i: number,
    j: number,
    numOfEls: number,
    forConclusion = false,
    precise = false
) {
    const getAdjLeft = (i: number) => (numOfEls + (i + 1)) % numOfEls;
    const getAdjRight = (i: number) => (numOfEls + (i - 1)) % numOfEls;
    const getInFront = (i: number) => (i + (numOfEls / 2)) % numOfEls;
    const getCWDist = (i: number, j: number) => (j - i + numOfEls) % numOfEls;
    const getCCWDist = (i: number, j: number) => numOfEls - getCWDist(i, j);

    // Set i to 0 and calc j relative to that
    j = (numOfEls + (j - i)) % numOfEls;
    i = 0;

    const isAdjLeft = getAdjLeft(i) === j;
    const isAdjRight = getAdjRight(i) === j;
    const isNext = isAdjLeft || isAdjRight;
    const isLeft = j < getInFront(i);
    const isRight = j > getInFront(i);
    const steps = Math.min(getCWDist(i, j), getCCWDist(i, j));

    const ways: Record<string, { possible: boolean, steps: number }> = {
        [EnumArrangements.AdjacentLeft]: {
            possible: isAdjLeft,
            steps
        },
        [EnumArrangements.AdjacentRight]: {
            possible: isAdjRight,
            steps
        },
        [EnumArrangements.NStepsLeft]: {
            possible: isLeft || steps === (numOfEls / 2),
            steps
        },
        [EnumArrangements.NStepsRight]: {
            possible: isRight || steps === (numOfEls / 2),
            steps
        },
    };

    // Even num of els do have diametrically opposite els
    if (numOfEls % 2 === 0) {
        ways[EnumArrangements.InFront] = {
            possible: getInFront(i) === j,
            steps
        };
    }

    if (forConclusion) {
        ways[EnumArrangements.Next] = {
            possible: isNext,
            steps
        };
        if (!precise) {
            ways[EnumArrangements.Left] = {
                possible: isLeft,
                steps: -Infinity
            };
            ways[EnumArrangements.Right] = {
                possible: isRight,
                steps: -Infinity
            };
        }
    }

    return ways;
};

export function interpolateArrangementRelationship(relationship: IArrangementRelationship, settings: Settings) {
    const numWord = NUMBER_WORDS[relationship.steps];

    const interpolatedWithSteps = relationship.description.replace(/# steps/, () =>
        relationship.steps === 1
            ? " adjacent and"
            : ((numWord || relationship.steps) + " steps")
    );

    if (settings.enabled.negation && coinFlip()) {
        // TODO: This method should return the number of negations applied
        return interpolatedWithSteps.replaceAll(/(left|right)/gi, substr =>
            `<span class="is-negated">${(substr === "left") ? "right" : "left"}</span>`
        );
    }

    return interpolatedWithSteps;
}

export function fixBinaryInstructions(q: Question) {
    const htmlify = (rule: string) => rule.split(", ").map(str => `<span class="subject">${str}</span>`).join(", ");
    switch (q.type) {
        case EnumQuestionType.LinearArrangement: {
            return htmlify(q.rule) + " are arranged in a <b>linear</b> way.";
        }
        case EnumQuestionType.CircularArrangement: {
            return htmlify(q.rule) + " are arranged in a <b>circular</b> way.";
        }
        default: {
            return "";
        }
    }
}

function buildGraph(edgeList: [string, "↔" | "→" | "←", string][]) {
    const graph = {} as Record<string, { out: Set<string>, in: Set<string> }>;
    edgeList.forEach(edge => {
        const [u, symbol, v] = edge;
        if (!graph[u]) graph[u] = { out: new Set(), in: new Set() };
        if (!graph[v]) graph[v] = { out: new Set(), in: new Set() };
        if (symbol === "→") {
            graph[u].out.add(v);
            graph[v].in.add(u);
        } else if (symbol === "←") {
            graph[v].out.add(u);
            graph[u].in.add(v);
        } else if (symbol === "↔") {
            // Bidirectional: add edges in both directions
            graph[u].out.add(v);
            graph[u].in.add(v);
            graph[v].out.add(u);
            graph[v].in.add(u);
        }
    });
    return graph;
}

// Checks if two directed graphs (given as edge lists) are isomorphic
export function areGraphsIsomorphic(edgeList1: [string, "↔" | "→" | "←", string][], edgeList2: [string, "↔" | "→" | "←", string][]) {
    const graph1 = buildGraph(edgeList1);
    const graph2 = buildGraph(edgeList2);
    const vertices1 = Object.keys(graph1);
    const vertices2 = Object.keys(graph2);

    // Quick check: graphs must have the same number of vertices
    if (vertices1.length !== vertices2.length) return false;

    // Quick check: compare sorted degree pairs [in-degree, out-degree]
    const degrees1 = vertices1
        .map(v => `${graph1[v].in.size},${graph1[v].out.size}`)
        .sort()
        .join(',');
    const degrees2 = vertices2
        .map(v => `${graph2[v].in.size},${graph2[v].out.size}`)
        .sort()
        .join(',');
    if (degrees1 !== degrees2) return false;

    const mapping = {} as Record<string, string>; // Mapping from graph1 vertices to graph2 vertices
    const used = new Set(); // Set of graph2 vertices that have been mapped

    // Checks the current partial mapping for consistency
    function isValidMapping() {
        for (const u of vertices1) {
            if (mapping[u]) {
                for (const v of graph1[u].out) {
                    if (mapping[v]) {
                        // Check that the mapped edge exists in graph2
                        if (!graph2[mapping[u]].out.has(mapping[v])) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }

    // Recursively tries to assign each vertex in graph1 to a vertex in graph2
    function backtrack(index: number) {
        if (index === vertices1.length) {
            // All vertices have been successfully mapped
            return true;
        }
        const u = vertices1[index];
        for (const v of vertices2) {
            if (!used.has(v)) {
                // Check if in-degree and out-degree match
                if (graph1[u].in.size === graph2[v].in.size &&
                    graph1[u].out.size === graph2[v].out.size) {
                    mapping[u] = v;
                    used.add(v);
                    if (isValidMapping() && backtrack(index + 1)) {
                        return true;
                    }
                    // Backtrack
                    delete mapping[u];
                    used.delete(v);
                }
            }
        }
        return false;
    }

    return backtrack(0);
}

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
