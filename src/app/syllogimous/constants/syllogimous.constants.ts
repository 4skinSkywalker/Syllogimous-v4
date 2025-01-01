import { Settings } from "../models/settings.models";
import { EnumQuestionType } from "./question.constants";

const INF = Infinity;

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

export const TIER_SCORE_RANGES: Record<EnumTiers, { minScore: number, maxScore: number }> = {
    [EnumTiers.Adept]:          { minScore: -INF,   maxScore: 99 },
    [EnumTiers.Scholar]:        { minScore: 100,    maxScore: 249 },
    [EnumTiers.Savant]:         { minScore: 250,    maxScore: 549 },
    [EnumTiers.Expert]:         { minScore: 550,    maxScore: 999 },
    [EnumTiers.Mastermind]:     { minScore: 1000,   maxScore: 1599 },
    [EnumTiers.Visionary]:      { minScore: 1600,   maxScore: 2399 },
    [EnumTiers.Genius]:         { minScore: 2400,   maxScore: 3399 },
    [EnumTiers.Virtuoso]:       { minScore: 3400,   maxScore: 4599 },
    [EnumTiers.Luminary]:       { minScore: 4600,   maxScore: 5999 },
    [EnumTiers.Prodigy]:        { minScore: 6000,   maxScore: 7599 },
    [EnumTiers.Oracle]:         { minScore: 7600,   maxScore: 9399 },
    [EnumTiers.Sage]:           { minScore: 9400,   maxScore: 11299 },
    [EnumTiers.Philosopher]:    { minScore: 11300,  maxScore: 13299 },
    [EnumTiers.Mystic]:         { minScore: 13300,  maxScore: 15399 },
    [EnumTiers.Transcendent]:   { minScore: 15400,  maxScore: INF },
};

export const TIER_SCORE_ADJUSTMENTS: Record<EnumTiers, { increment: number, decrement: number }> = {
    [EnumTiers.Adept]:          { increment: 10, decrement: 10 },
    [EnumTiers.Scholar]:        { increment: 10, decrement: 10 },
    [EnumTiers.Savant]:         { increment: 10, decrement: 10 },
    [EnumTiers.Expert]:         { increment: 10, decrement: 10 },
    [EnumTiers.Mastermind]:     { increment: 10, decrement: 10 },
    [EnumTiers.Visionary]:      { increment: 8,  decrement: 8 },
    [EnumTiers.Genius]:         { increment: 8,  decrement: 8 },
    [EnumTiers.Virtuoso]:       { increment: 8,  decrement: 8 },
    [EnumTiers.Luminary]:       { increment: 8,  decrement: 8 },
    [EnumTiers.Prodigy]:        { increment: 8,  decrement: 8 },
    [EnumTiers.Oracle]:         { increment: 5,  decrement: 5 },
    [EnumTiers.Sage]:           { increment: 5,  decrement: 5 },
    [EnumTiers.Philosopher]:    { increment: 5,  decrement: 5 },
    [EnumTiers.Mystic]:         { increment: 5,  decrement: 5 },
    [EnumTiers.Transcendent]:   { increment: 5,  decrement: 5 },
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
    EnumQuestionType.Analogy,
    EnumQuestionType.Direction4D,
    EnumQuestionType.Binary,
];

/**
 * The following is a matrix that represents
 * configurations of question types over tiers
 * 
 *        q1  q2  q3  q4  q5  q6
 *    t1 [ 2, -1, -1, -1, -1, -1 ]
 *    t2 [ 2,  2, -1, -1, -1, -1 ]
 *    t3 [ 2,  2,  2, -1, -1, -1 ]
 *    t4 [ 2,  2,  2,  2, -1, -1 ]
 *    t5 [ 2,  2,  2,  2,  2, -1 ]
 *    t6 [ 2,  2,  2,  2,  2,  2 ]
 *    t7 [ 2,  2,  2,  2,  2,  2 ]
 * 
 * Where q stands for question types and t stands
 * for tiers
 */
export const TIERS_MATRIX: Record<number, [ number, number, number, number, number, number, number, number, number, number, number, number ]> = {
     0: [  2,  2,  2, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
     1: [  3,  3,  3,  2, -1, -1, -1, -1, -1, -1, -1, -1 ],
     2: [  4,  4,  4,  3,  2, -1,  2, -1, -1, -1, -1, -1 ],
     3: [  5,  5,  5,  4,  3,  2,  3,  2,  2, -1, -1, -1 ],
     4: [  6,  6,  6,  5,  4,  3,  4,  3,  3,  3, -1, -1 ],
     5: [  7,  7,  7,  6,  5,  4,  5,  4,  4,  4,  2,  4 ],
     6: [  8,  8,  8,  7,  6,  5,  6,  5,  5,  5,  3,  5 ],
     7: [  9,  9,  9,  8,  7,  6,  7,  6,  6,  6,  4,  6 ],
     8: [ 10, 10, 10,  9,  8,  7,  8,  7,  7,  7,  5,  7 ],
     9: [ 11, 11, 11, 10,  9,  8,  9,  8,  8,  8,  6,  8 ],
    10: [ 12, 12, 12, 11, 10,  9, 10,  9,  9,  9,  7,  9 ],
    11: [ 13, 13, 13, 12, 11, 10, 11, 10, 10, 10,  8, 10 ],
    12: [ 14, 14, 14, 13, 12, 11, 12, 11, 11, 11,  9, 11 ],
    13: [ 15, 15, 15, 14, 13, 12, 13, 12, 12, 12, 10, 12 ],
    14: [ 16, 16, 16, 15, 14, 13, 14, 13, 13, 13, 11, 13 ],
};

/** Given an EnumTiers value construct a Settings instance */
export function getSettingsFromTier(tier: EnumTiers) {
    const tierIdx = ORDERED_TIERS.findIndex(_tier => _tier === tier);
    const settings = new Settings();
    settings.setEnable("negation", false);
    settings.setEnable("meta", false);
    for (let i = 0; i < TIERS_MATRIX[tierIdx].length; i++) {
        const questionType = ORDERED_QUESTION_TYPES[i];
        const numOfPremises = TIERS_MATRIX[tierIdx][i];
        const activeQuestion = numOfPremises > -1 ? true : false;
        settings.setQuestionSettings(questionType, activeQuestion, numOfPremises);
    }
    if (tierIdx > 5) {
        settings.setEnable("negation", true);
    }
    if (tierIdx > 6) {
        settings.setEnable("meta", true);
    }
    console.log(tier, "matrix row", TIERS_MATRIX[tierIdx]);
    console.log(tier, "settings", settings);
    return settings;
}