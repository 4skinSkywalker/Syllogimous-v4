import { ISettings } from "../models/settings.models";
import { EnumTiers } from "../models/syllogimous.models";

export const TIER_COLORS: Record<string, {bgColor: string, textColor: string}> = {
    [EnumTiers.Adept]: { bgColor: "#F0F8FF", textColor: "#045D56" },  // Alice Blue with Teal
    [EnumTiers.Savant]: { bgColor: "#E6E6FA", textColor: "#4B0082" },  // Lavender with Indigo
    [EnumTiers.Mastermind]: { bgColor: "#DDA0DD", textColor: "#483D8B" },  // Plum with Dark Slate Blue
    [EnumTiers.Visionary]: { bgColor: "#B0E0E6", textColor: "#002366" },  // Powder Blue with Royal Blue
    [EnumTiers.Genius]: { bgColor: "#AFEEEE", textColor: "#004953" },  // Pale Turquoise with Deep Aqua
    [EnumTiers.Luminary]: { bgColor: "#98FB98", textColor: "#006400" },  // Pale Green with Dark Green
    [EnumTiers.Prodigy]: { bgColor: "#FFFACD", textColor: "#556B2F" },  // Lemon Chiffon with Dark Olive Green
    [EnumTiers.Oracle]: { bgColor: "#FFDAB9", textColor: "#A0522D" },  // Peach Puff with Sienna
    [EnumTiers.Sage]: { bgColor: "#FFC0CB", textColor: "#8B0000" },  // Pink with Dark Red
    [EnumTiers.Philosopher]: { bgColor: "#D8BFD8", textColor: "#4A235A" },  // Thistle with Dark Purple
    [EnumTiers.Mystic]: { bgColor: "#C71585", textColor: "#FFE4E1" },  // Medium Violet Red with Misty Rose
    [EnumTiers.Transcendent]: { bgColor: "#4B0082", textColor: "#F0F8FF" }   // Indigo with Alice Blue
};

export const TIER_SCORE_RANGES: Record<string, { minScore: number, maxScore: number }> = {
    [EnumTiers.Adept]: { minScore: -Infinity, maxScore: 99 },
    [EnumTiers.Savant]: { minScore: 100, maxScore: 249 },
    [EnumTiers.Mastermind]: { minScore: 250, maxScore: 549 },
    [EnumTiers.Visionary]: { minScore: 550, maxScore: 999 },
    [EnumTiers.Genius]: { minScore: 1000, maxScore: 1599 },
    [EnumTiers.Luminary]: { minScore: 1600, maxScore: 2399 },
    [EnumTiers.Prodigy]: { minScore: 2400, maxScore: 3399 },
    [EnumTiers.Oracle]: { minScore: 3400, maxScore: 4599 },
    [EnumTiers.Sage]: { minScore: 4600, maxScore: 5999 },
    [EnumTiers.Philosopher]: { minScore: 6000, maxScore: 7599 },
    [EnumTiers.Mystic]: { minScore: 7600, maxScore: 9399 },
    [EnumTiers.Transcendent]: { minScore: 9400, maxScore: Infinity }
};

export const TIER_SCORE_ADJUSTMENTS: Record<string, { increment: number, decrement: number }> = {
    [EnumTiers.Adept]: { increment: 10, decrement: 5 },
    [EnumTiers.Savant]: { increment: 10, decrement: 5 },
    [EnumTiers.Mastermind]: { increment: 10, decrement: 5 },
    [EnumTiers.Visionary]: { increment: 10, decrement: 5 },
    [EnumTiers.Genius]: { increment: 10, decrement: 5 },
    [EnumTiers.Luminary]: { increment: 10, decrement: 5 },
    [EnumTiers.Prodigy]: { increment: 5, decrement: 5 },
    [EnumTiers.Oracle]: { increment: 5, decrement: 5 },
    [EnumTiers.Sage]: { increment: 5, decrement: 5 },
    [EnumTiers.Philosopher]: { increment: 5, decrement: 5 },
    [EnumTiers.Mystic]: { increment: 5, decrement: 5 },
    [EnumTiers.Transcendent]: { increment: 5, decrement: 5 }
};

// Minimum premises for analogy is 3
// Minimum premises for binary is 4

export const TIER_SETTINGS: Record<EnumTiers, ISettings> = {
    [EnumTiers.Adept]: {
        enableMeaningfulWords:   true,
        enableMeta:              false,
        enableNegation:          false,

        distinction:             [ true,  2 ],
        comparisonNumerical:     [ true,  2 ],
        comparisonChronological: [ true,  2 ],
        direction:               [ false, 2 ],
        syllogism:               [ false, 2 ],
        direction3D:             [ false, 2 ],
        direction4D:             [ false, 2 ],
        analogy:                 [ false, 3 ],
        binary:                  [ false, 4 ],

        enableAnd:               false,
        enableOr:                false,
        enableNand:              false,
        enableNor:               false,
        enableXor:               false,
        enableXnor:              false,
    },
    [EnumTiers.Savant]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          false,

        distinction:             [ true,  3 ],
        comparisonNumerical:     [ true,  3 ],
        comparisonChronological: [ true,  3 ],
        direction:               [ true,  3 ],
        syllogism:               [ true,  3 ],
        direction3D:             [ false, 2 ],
        direction4D:             [ false, 2 ],
        analogy:                 [ false, 3 ],
        binary:                  [ false, 4 ],

        enableAnd:               false,
        enableOr:                false,
        enableNand:              false,
        enableNor:               false,
        enableXor:               false,
        enableXnor:              false,
    },
    [EnumTiers.Mastermind]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          false,

        distinction:             [ true,  4 ],
        comparisonNumerical:     [ true,  4 ],
        comparisonChronological: [ true,  4 ],
        direction:               [ true,  3 ],
        syllogism:               [ true,  3 ],
        direction3D:             [ true,  2 ],
        direction4D:             [ true,  2 ],
        analogy:                 [ false, 3 ],
        binary:                  [ false, 4 ],

        enableAnd:               false,
        enableOr:                false,
        enableNand:              false,
        enableNor:               false,
        enableXor:               false,
        enableXnor:              false,
    },
    [EnumTiers.Visionary]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          false,

        distinction:             [ true,  4 ],
        comparisonNumerical:     [ true,  4 ],
        comparisonChronological: [ true,  4 ],
        direction:               [ true,  4 ],
        syllogism:               [ true,  4 ],
        direction3D:             [ true,  3 ],
        direction4D:             [ true,  3 ],
        analogy:                 [ true,  3 ],
        binary:                  [ false, 4 ],

        enableAnd:               false,
        enableOr:                false,
        enableNand:              false,
        enableNor:               false,
        enableXor:               false,
        enableXnor:              false,
    },
    [EnumTiers.Genius]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          true,

        distinction:             [ true,  5 ],
        comparisonNumerical:     [ true,  5 ],
        comparisonChronological: [ true,  5 ],
        direction:               [ true,  4 ],
        syllogism:               [ true,  4 ],
        direction3D:             [ true,  3 ],
        direction4D:             [ true,  3 ],
        analogy:                 [ true,  3 ],
        binary:                  [ true,  4 ],

        enableAnd:               true,
        enableOr:                true,
        enableNand:              false,
        enableNor:               false,
        enableXor:               false,
        enableXnor:              false,
    },
    [EnumTiers.Luminary]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          true,

        distinction:             [ true,  5 ],
        comparisonNumerical:     [ true,  5 ],
        comparisonChronological: [ true,  5 ],
        direction:               [ true,  5 ],
        syllogism:               [ true,  5 ],
        direction3D:             [ true,  4 ],
        direction4D:             [ true,  4 ],
        analogy:                 [ true,  4 ],
        binary:                  [ true,  4 ],

        enableAnd:               true,
        enableOr:                true,
        enableNand:              true,
        enableNor:               true,
        enableXor:               true,
        enableXnor:              true,
    },
    [EnumTiers.Prodigy]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          true,

        distinction:             [ true,  6 ],
        comparisonNumerical:     [ true,  6 ],
        comparisonChronological: [ true,  6 ],
        direction:               [ true,  6 ],
        syllogism:               [ true,  5 ],
        direction3D:             [ true,  4 ],
        direction4D:             [ true,  4 ],
        analogy:                 [ true,  4 ],
        binary:                  [ true,  4 ],

        enableAnd:               true,
        enableOr:                true,
        enableNand:              true,
        enableNor:               true,
        enableXor:               true,
        enableXnor:              true,
    },
    [EnumTiers.Oracle]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          true,

        distinction:             [ true,  7 ],
        comparisonNumerical:     [ true,  7 ],
        comparisonChronological: [ true,  7 ],
        direction:               [ true,  6 ],
        syllogism:               [ true,  6 ],
        direction3D:             [ true,  5 ],
        direction4D:             [ true,  5 ],
        analogy:                 [ true,  5 ],
        binary:                  [ true,  5 ],

        enableAnd:               true,
        enableOr:                true,
        enableNand:              true,
        enableNor:               true,
        enableXor:               true,
        enableXnor:              true,
    },
    [EnumTiers.Sage]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          true,

        distinction:             [ true,  7 ],
        comparisonNumerical:     [ true,  7 ],
        comparisonChronological: [ true,  7 ],
        direction:               [ true,  7 ],
        syllogism:               [ true,  7 ],
        direction3D:             [ true,  6 ],
        direction4D:             [ true,  6 ],
        analogy:                 [ true,  6 ],
        binary:                  [ true,  6 ],

        enableAnd:               true,
        enableOr:                true,
        enableNand:              true,
        enableNor:               true,
        enableXor:               true,
        enableXnor:              true,
    },
    [EnumTiers.Philosopher]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          true,

        distinction:             [ true,  8 ],
        comparisonNumerical:     [ true,  8 ],
        comparisonChronological: [ true,  8 ],
        direction:               [ true,  8 ],
        syllogism:               [ true,  7 ],
        direction3D:             [ true,  7 ],
        direction4D:             [ true,  7 ],
        analogy:                 [ true,  6 ],
        binary:                  [ true,  6 ],

        enableAnd:               true,
        enableOr:                true,
        enableNand:              true,
        enableNor:               true,
        enableXor:               true,
        enableXnor:              true,
    },
    [EnumTiers.Mystic]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          true,

        distinction:             [ true,  9 ],
        comparisonNumerical:     [ true,  9 ],
        comparisonChronological: [ true,  9 ],
        direction:               [ true,  9 ],
        syllogism:               [ true,  8 ],
        direction3D:             [ true,  8 ],
        direction4D:             [ true,  8 ],
        analogy:                 [ true,  7 ],
        binary:                  [ true,  7 ],

        enableAnd:               true,
        enableOr:                true,
        enableNand:              true,
        enableNor:               true,
        enableXor:               true,
        enableXnor:              true,
    },
    [EnumTiers.Transcendent]: {
        enableMeaningfulWords:   true,
        enableMeta:              true,
        enableNegation:          true,

        distinction:             [ true,  9 ],
        comparisonNumerical:     [ true,  9 ],
        comparisonChronological: [ true,  9 ],
        direction:               [ true,  9 ],
        syllogism:               [ true,  9 ],
        direction3D:             [ true,  9 ],
        direction4D:             [ true,  9 ],
        analogy:                 [ true,  8 ],
        binary:                  [ true,  8 ],

        enableAnd:               true,
        enableOr:                true,
        enableNand:              true,
        enableNor:               true,
        enableXor:               true,
        enableXnor:              true,
    }
}