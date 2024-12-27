export enum EnumQuestionGroup {
    Comparison = "Comparison",
    Direction = "Direction",
    Arrangement = "Arrangement",
}

export const DEFAULT_ENABLED_FLAGS = {
    meaningfulWords: true,
    meta: true,
    negation: true,
    binary: {
        and: true,
        nand: true,
        or: true,
        nor: true,
        xor: true,
        xnor: true,
    },
};

export const COMPARISON_PARAMS = {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true,
    group: EnumQuestionGroup.Comparison
};

export const DIRECTION_PARAMS = {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true,
    group: EnumQuestionGroup.Direction
};

export const ARRANGEMENT_PARAMS = {
    enabled: true,
    minNumOfPremises: 3,
    maxNumOfPremises: 20,
    basic: true,
    group: EnumQuestionGroup.Arrangement
};

export const BASIC_PARAMS = {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true
};

export const ANALOGY_PARAMS = {
    enabled: true,
    minNumOfPremises: 3,
    maxNumOfPremises: 20,
    basic: false
};

export const BINARY_PARAMS = {
    enabled: true,
    minNumOfPremises: 4,
    maxNumOfPremises: 20,
    basic: false
};