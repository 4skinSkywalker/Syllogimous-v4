import { ImmediateInference, SylKind } from "../models/syllogism.models";

export const VALID_RULES = [
    "0001",
    "1011",
    "0221",
    "1231",
    "0021",
    "1031",
    "0112",
    "1012",
    "1232",
    "0332",
    "0132",
    "1032",
    "0223",
    "2023",
    "3033",
    "1233",
    "0023",
    "1033",
    "0114",
    "2024",
    "1234",
    "0134",
    "1034",
    "0024"
];

export const FORMS = [
    [
        'All <span class="subject">$</span> is <span class="subject">$</span>',
        'No <span class="subject">$</span> is <span class="subject">$</span>',
        'Some <span class="subject">$</span> is <span class="subject">$</span>',
        'Some <span class="subject">$</span> is not <span class="subject">$</span>'
    ],
    [
        '<span class="is-negated">No</span> <span class="subject">$</span> is <span class="subject">$</span>',
        '<span class="is-negated">All</span> <span class="subject">$</span> is <span class="subject">$</span>',
        'Some <span class="subject">$</span> <span class="is-negated">is not</span> <span class="subject">$</span>',
        'Some <span class="subject">$</span> <span class="is-negated">is</span> <span class="subject">$</span>'
    ],
];

export const SYL_KINDS: SylKind[] = ["all", "no", "some", "some_not"];

/** Immediate inferences (1 premise) without existential import */
export const SYL_IMMEDIATE_INFERENCES: ImmediateInference[] = [
    { kind: "no",   conclKind: "no",   swap: true },
    { kind: "some", conclKind: "some", swap: true },
];

/** Syllogistic table: "kind1,kind2,figure" -> valid kind3 list */
export const SYL_TRUE_CONCLUSIONS: Record<string, SylKind[]> = {
    // Figure 1: M-P, S-M => S-P
    "all,all,1":      ["all", "some"],
    "no,all,1":       ["no", "some_not"],
    "all,some,1":     ["some"],
    "no,some,1":      ["some_not"],
    // Figure 2: P-M, S-M => S-P
    "all,no,2":       ["no", "some_not"],
    "no,all,2":       ["no", "some_not"],
    "all,some_not,2": ["some_not"],
    "no,some,2":      ["some_not"],
    // Figure 3: M-P, M-S => S-P
    "all,all,3":      ["some"],
    "some,all,3":     ["some"],
    "all,some,3":     ["some"],
    "no,all,3":       ["some_not"],
    "some_not,all,3": ["some_not"],
    "no,some,3":      ["some_not"],
    // Figure 4: P-M, M-S => S-P
    "all,no,4":       ["no", "some_not"],
    "all,all,4":      ["some"],
    "some,all,4":     ["some"],
    "no,all,4":       ["some_not"],
    "no,some,4":      ["some_not"],
};

export const SYL_TRUE_CONCLUSIONS_KEYS = Object.keys(SYL_TRUE_CONCLUSIONS);