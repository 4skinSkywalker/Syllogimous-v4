import { EnumQuestionType } from "./question.constants";

export const questionTypeMinNumOfPremises: Record<EnumQuestionType, number> = {
    [EnumQuestionType.Distinction]: 2,
    [EnumQuestionType.ComparisonNumerical]: 2,
    [EnumQuestionType.ComparisonChronological]: 2,
    [EnumQuestionType.Syllogism]: 2,
    [EnumQuestionType.LinearArrangement]: 2,
    [EnumQuestionType.CircularArrangement]: 2,
    [EnumQuestionType.Direction]: 2,
    [EnumQuestionType.Direction3DSpatial]: 2,
    [EnumQuestionType.Direction3DTemporal]: 2,
    [EnumQuestionType.Analogy]: 3,
    [EnumQuestionType.Binary]: 4,
}

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

export const BASIC_PARAMS = {
    enabled: true,
    minNumOfPremises: questionTypeMinNumOfPremises.Distinction,
    maxNumOfPremises: 20,
    basic: true
};

export const COMPARISON_PARAMS = {
    ...BASIC_PARAMS,
    group: EnumQuestionGroup.Comparison
};

export const ARRANGEMENT_PARAMS = {
    ...BASIC_PARAMS,
    group: EnumQuestionGroup.Arrangement
};

export const DIRECTION_PARAMS = {
    ...BASIC_PARAMS,
    group: EnumQuestionGroup.Direction
};

export const ANALOGY_PARAMS = {
    enabled: true,
    minNumOfPremises: questionTypeMinNumOfPremises.Analogy,
    maxNumOfPremises: 20,
    basic: false
};

export const BINARY_PARAMS = {
    enabled: true,
    minNumOfPremises: questionTypeMinNumOfPremises.Binary,
    maxNumOfPremises: 20,
    basic: false
};