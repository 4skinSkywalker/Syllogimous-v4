import { FORMS, NOUNS, NUMBER_WORDS, STRINGS, VALID_RULES } from "../constants/question.constants";
import { EnumArrangements, EnumQuestionType } from "../constants/question.constants";
import { IArrangementPremise, IArrangementRelationship, Question } from "../models/question.models";
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

export function getLinearWays(i: number, j: number, numOfEls: number, forConclusion = false) {
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
        ways[EnumArrangements.Left] = {
            possible: isLeft,
            steps: -Infinity
        };
        ways[EnumArrangements.Right] = {
            possible: isRight,
            steps: -Infinity
        };
    }

    return ways;
};

export function getCircularWays(i: number, j: number, numOfEls: number, forConclusion = false) {
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
        ways[EnumArrangements.Left] = {
            possible: isLeft,
            steps: -Infinity
        };
        ways[EnumArrangements.Right] = {
            possible: isRight,
            steps: -Infinity
        };
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