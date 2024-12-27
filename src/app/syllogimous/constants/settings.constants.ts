export enum EnumQuestionGroup {
    Comparison = "Comparison",
    Direction = "Direction",
    Arrangement = "Arrangement",
}

export const COMPARISON_OPTIONS = {
    enabled: true,
    min: 2,
    max: 20,
    basic: true,
    group: EnumQuestionGroup.Comparison
};

export const DIRECTION_OPTIONS = {
    enabled: true,
    min: 2,
    max: 20,
    basic: true,
    group: EnumQuestionGroup.Direction
};

export const ARRANGEMENT_OPTIONS = {
    enabled: true,
    min: 3,
    max: 20,
    basic: false,
    group: EnumQuestionGroup.Arrangement
};

export const BASIC_OPTIONS = {
    enabled: true,
    min: 2,
    max: 20,
    basic: true
};

export const ANALOGY_OPTIONS = {
    enabled: true,
    min: 3,
    max: 20,
    basic: false
};

export const BINARY_OPTIONS = {
    enabled: true,
    min: 4,
    max: 20,
    basic: false
};