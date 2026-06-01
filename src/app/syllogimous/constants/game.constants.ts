import { EnumQuestionType } from "./question.constants";

export const INF = Infinity;

export enum EnumScreens {
    Intro = "Intro",
    Start = "Start",
    Tutorial = "Tutorial",
    Game = "Game",
    Feedback = "Feedback",
    History = "History",
    Tutorials = "Tutorials",
    Stats = "Stats",
    PlaygroundMode = "Playground Mode",
    Settings = "Settings",
    TiersMatrix = "Tiers Matrix",
    OtherGames = "Other Games",
}

export enum EnumTiers {
    Adept = "Adept",
    Scholar = "Scholar",
    Savant = "Savant",
    Expert = "Expert",
    Mastermind = "Mastermind",
    Visionary = "Visionary",
    Genius = "Genius",
    Virtuoso = "Virtuoso",
    Luminary = "Luminary",
    Prodigy = "Prodigy",
    Oracle = "Oracle",
    Sage = "Sage",
    Philosopher = "Philosopher",
    Mystic = "Mystic",
    Transcendent = "Transcendent",
}

export const TIER_COLORS: Record<EnumTiers, { bgColor: string, textColor: string }> = {
    [EnumTiers.Adept]:          { bgColor: "#F0F8FF", textColor: "#045D56" },  // Alice Blue with Teal
    [EnumTiers.Scholar]:        { bgColor: "#ADD8E6", textColor: "#013220" },  // Light Blue with Deep Green
    [EnumTiers.Savant]:         { bgColor: "#E6E6FA", textColor: "#4B0082" },  // Lavender with Indigo
    [EnumTiers.Expert]:         { bgColor: "#D8BFD8", textColor: "#8B008B" },  // Thistle with Dark Magenta
    [EnumTiers.Mastermind]:     { bgColor: "#DDA0DD", textColor: "#483D8B" },  // Plum with Dark Slate Blue
    [EnumTiers.Visionary]:      { bgColor: "#B0E0E6", textColor: "#002366" },  // Powder Blue with Royal Blue
    [EnumTiers.Genius]:         { bgColor: "#AFEEEE", textColor: "#004953" },  // Pale Turquoise with Deep Aqua
    [EnumTiers.Virtuoso]:       { bgColor: "#00CED1", textColor: "#002D62" },  // Dark Turquoise with Deep Blue
    [EnumTiers.Luminary]:       { bgColor: "#98FB98", textColor: "#006400" },  // Pale Green with Dark Green
    [EnumTiers.Prodigy]:        { bgColor: "#FFFACD", textColor: "#556B2F" },  // Lemon Chiffon with Dark Olive Green
    [EnumTiers.Oracle]:         { bgColor: "#FFDAB9", textColor: "#A0522D" },  // Peach Puff with Sienna
    [EnumTiers.Sage]:           { bgColor: "#FFC0CB", textColor: "#8B0000" },  // Pink with Dark Red
    [EnumTiers.Philosopher]:    { bgColor: "#D8BFD8", textColor: "#4A235A" },  // Thistle with Dark Purple
    [EnumTiers.Mystic]:         { bgColor: "#C71585", textColor: "#FFE4E1" },  // Medium Violet Red with Misty Rose
    [EnumTiers.Transcendent]:   { bgColor: "#4B0082", textColor: "#F0F8FF" },  // Indigo with Alice Blue
};

export const NO_DATA = "--";

export const TIER_SCORE_RANGES: Record<EnumTiers, { minScore: number, maxScore: number }> = {
    [EnumTiers.Adept]:          { minScore: -INF, maxScore:  249 },
    [EnumTiers.Scholar]:        { minScore:  250, maxScore:  499 },
    [EnumTiers.Savant]:         { minScore:  500, maxScore:  749 },
    [EnumTiers.Expert]:         { minScore:  750, maxScore:  999 },
    [EnumTiers.Mastermind]:     { minScore: 1000, maxScore: 1249 },
    [EnumTiers.Visionary]:      { minScore: 1250, maxScore: 1499 },
    [EnumTiers.Genius]:         { minScore: 1500, maxScore: 1749 },
    [EnumTiers.Virtuoso]:       { minScore: 1750, maxScore: 1999 },
    [EnumTiers.Luminary]:       { minScore: 2000, maxScore: 2249 },
    [EnumTiers.Prodigy]:        { minScore: 2250, maxScore: 2499 },
    [EnumTiers.Oracle]:         { minScore: 2500, maxScore: 2749 },
    [EnumTiers.Sage]:           { minScore: 2750, maxScore: 2999 },
    [EnumTiers.Philosopher]:    { minScore: 3000, maxScore: 3249 },
    [EnumTiers.Mystic]:         { minScore: 3250, maxScore: 3499 },
    [EnumTiers.Transcendent]:   { minScore: 3500, maxScore:  INF },
};

export const TIER_SCORE_ADJUSTMENTS: Record<EnumTiers, { increment: number, decrement: number }> = {
    [EnumTiers.Adept]:          { increment: 10, decrement: 10 },
    [EnumTiers.Scholar]:        { increment: 10, decrement: 10 },
    [EnumTiers.Savant]:         { increment: 10, decrement: 10 },
    [EnumTiers.Expert]:         { increment: 10, decrement: 10 },
    [EnumTiers.Mastermind]:     { increment: 10, decrement: 10 },
    [EnumTiers.Visionary]:      { increment: 10, decrement: 10 },
    [EnumTiers.Genius]:         { increment: 10, decrement: 10 },
    [EnumTiers.Virtuoso]:       { increment: 10, decrement: 10 },
    [EnumTiers.Luminary]:       { increment: 10, decrement: 10 },
    [EnumTiers.Prodigy]:        { increment: 10, decrement: 10 },
    [EnumTiers.Oracle]:         { increment: 10, decrement: 10 },
    [EnumTiers.Sage]:           { increment: 10, decrement: 10 },
    [EnumTiers.Philosopher]:    { increment: 10, decrement: 10 },
    [EnumTiers.Mystic]:         { increment: 10, decrement: 10 },
    [EnumTiers.Transcendent]:   { increment: 10, decrement: 10 },
};

export const ORDERED_TIERS = Object.keys(TIER_SCORE_RANGES) as EnumTiers[];

export const ORDERED_QUESTION_TYPES = [ 
    EnumQuestionType.Distinction,
    EnumQuestionType.ComparisonNumerical,
    EnumQuestionType.ComparisonChronological,
    EnumQuestionType.Syllogism,
    EnumQuestionType.LinearArrangement,
    EnumQuestionType.CircularArrangement,
    EnumQuestionType.Direction,
    EnumQuestionType.Direction3DSpatial,
    EnumQuestionType.Direction3DTemporal,
    EnumQuestionType.GraphMatching,
    EnumQuestionType.Analogy,
    EnumQuestionType.Binary,
];

export const TIERS_MATRIX: Record<number, [ 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1 ]> = {
     0: [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
     1: [  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0 ],
     2: [  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0 ],
     3: [  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0 ],
     4: [  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0 ],
     5: [  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1,  0 ],
     6: [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
     7: [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
     8: [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
     9: [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
    10: [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
    11: [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
    12: [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
    13: [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
    14: [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
};