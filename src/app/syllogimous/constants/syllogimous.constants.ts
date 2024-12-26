import { EnumQuestionType } from "../models/question.models";
import { Settings } from "../models/settings.models";
import { EnumTiers } from "../models/syllogimous.models";

const INF = Infinity;

export const TIER_COLORS: Record<EnumTiers, { bgColor: string, textColor: string }> = {
    [EnumTiers.Adept]:          { bgColor: "#F0F8FF", textColor: "#045D56" },  // Alice Blue with Teal
    [EnumTiers.Scholar]:        { bgColor: "#ADD8E6", textColor: "#013220" },  // Light Blue with Deep Green
    [EnumTiers.Savant]:         { bgColor: "#E6E6FA", textColor: "#4B0082" },  // Lavender with Indigo
    [EnumTiers.Expert]:         { bgColor: "#D8BFD8", textColor: "#8B008B" },  // Thistle with Dark Magenta
    [EnumTiers.Mastermind]:     { bgColor: "#DDA0DD", textColor: "#483D8B" },  // Plum with Dark Slate Blue
    [EnumTiers.Enlightened]:    { bgColor: "#BA55D3", textColor: "#000080" },  // Medium Orchid with Navy
    [EnumTiers.Visionary]:      { bgColor: "#B0E0E6", textColor: "#002366" },  // Powder Blue with Royal Blue
    [EnumTiers.Innovator]:      { bgColor: "#87CEFA", textColor: "#1C1C1C" },  // Light Sky Blue with Very Dark Gray
    [EnumTiers.Genius]:         { bgColor: "#AFEEEE", textColor: "#004953" },  // Pale Turquoise with Deep Aqua
    [EnumTiers.Virtuoso]:       { bgColor: "#00CED1", textColor: "#002D62" },  // Dark Turquoise with Deep Blue
    [EnumTiers.Luminary]:       { bgColor: "#98FB98", textColor: "#006400" },  // Pale Green with Dark Green
    [EnumTiers.Illuminator]:    { bgColor: "#7FFFD4", textColor: "#228B22" },  // Aquamarine with Forest Green
    [EnumTiers.Prodigy]:        { bgColor: "#FFFACD", textColor: "#556B2F" },  // Lemon Chiffon with Dark Olive Green
    [EnumTiers.Intuitive]:      { bgColor: "#FFEFD5", textColor: "#6B8E23" },  // Papaya Whip with Olive Drab
    [EnumTiers.Oracle]:         { bgColor: "#FFDAB9", textColor: "#A0522D" },  // Peach Puff with Sienna
    [EnumTiers.Visionist]:      { bgColor: "#FFA07A", textColor: "#8B4513" },  // Light Salmon with Saddle Brown
    [EnumTiers.Sage]:           { bgColor: "#FFC0CB", textColor: "#8B0000" },  // Pink with Dark Red
    [EnumTiers.Thinker]:        { bgColor: "#FFB6C1", textColor: "#B22222" },  // Light Pink with Firebrick
    [EnumTiers.Philosopher]:    { bgColor: "#D8BFD8", textColor: "#4A235A" },  // Thistle with Dark Purple
    [EnumTiers.Theorist]:       { bgColor: "#BA55D3", textColor: "#F5F5F5" },  // Medium Orchid with White Smoke
    [EnumTiers.Mystic]:         { bgColor: "#C71585", textColor: "#FFE4E1" },  // Medium Violet Red with Misty Rose
    [EnumTiers.Seer]:           { bgColor: "#DB7093", textColor: "#800000" },  // Pale Violet Red with Maroon
    [EnumTiers.Transcendent]:   { bgColor: "#4B0082", textColor: "#F0F8FF" },  // Indigo with Alice Blue
};

export const TIER_SCORE_RANGES: Record<EnumTiers, { minScore: number, maxScore: number }> = {
    [EnumTiers.Adept]:          { minScore: -INF,   maxScore: 99 },
    [EnumTiers.Scholar]:        { minScore: 100,    maxScore: 249 }, 
    [EnumTiers.Savant]:         { minScore: 250,    maxScore: 549 },
    [EnumTiers.Expert]:         { minScore: 550,    maxScore: 999 },
    [EnumTiers.Mastermind]:     { minScore: 1000,   maxScore: 1599 },
    [EnumTiers.Enlightened]:    { minScore: 1600,   maxScore: 2399 },
    [EnumTiers.Visionary]:      { minScore: 2400,   maxScore: 3399 },
    [EnumTiers.Innovator]:      { minScore: 3400,   maxScore: 4599 },
    [EnumTiers.Genius]:         { minScore: 4600,   maxScore: 5999 },
    [EnumTiers.Virtuoso]:       { minScore: 6000,   maxScore: 7599 },
    [EnumTiers.Luminary]:       { minScore: 7600,   maxScore: 9399 },
    [EnumTiers.Illuminator]:    { minScore: 9400,   maxScore: 11299 },
    [EnumTiers.Prodigy]:        { minScore: 11300,  maxScore: 13299 },
    [EnumTiers.Intuitive]:      { minScore: 13300,  maxScore: 15399 },
    [EnumTiers.Oracle]:         { minScore: 15400,  maxScore: 17599 },
    [EnumTiers.Visionist]:      { minScore: 17600,  maxScore: 19999 },
    [EnumTiers.Sage]:           { minScore: 20000,  maxScore: 22499 },
    [EnumTiers.Thinker]:        { minScore: 22500,  maxScore: 24999 },
    [EnumTiers.Philosopher]:    { minScore: 25000,  maxScore: 27699 },
    [EnumTiers.Theorist]:       { minScore: 27700,  maxScore: 30499 },
    [EnumTiers.Mystic]:         { minScore: 30500,  maxScore: 33499 },
    [EnumTiers.Seer]:           { minScore: 33500,  maxScore: 36599 },
    [EnumTiers.Transcendent]:   { minScore: 36600,  maxScore: INF },
};

export const TIER_SCORE_ADJUSTMENTS: Record<EnumTiers, { increment: number, decrement: number }> = {
    [EnumTiers.Adept]:          { increment: 10, decrement: 5 },
    [EnumTiers.Scholar]:        { increment: 10, decrement: 5 }, 
    [EnumTiers.Savant]:         { increment: 10, decrement: 5 },
    [EnumTiers.Expert]:         { increment: 10, decrement: 5 },
    [EnumTiers.Mastermind]:     { increment: 10, decrement: 5 },
    [EnumTiers.Enlightened]:    { increment: 10, decrement: 5 },
    [EnumTiers.Visionary]:      { increment: 10, decrement: 5 },
    [EnumTiers.Innovator]:      { increment: 10, decrement: 5 },
    [EnumTiers.Genius]:         { increment: 8,  decrement: 5 },
    [EnumTiers.Virtuoso]:       { increment: 8,  decrement: 5 },
    [EnumTiers.Luminary]:       { increment: 8,  decrement: 5 },
    [EnumTiers.Illuminator]:    { increment: 8,  decrement: 5 },
    [EnumTiers.Prodigy]:        { increment: 8,  decrement: 5 },
    [EnumTiers.Intuitive]:      { increment: 8,  decrement: 5 },
    [EnumTiers.Oracle]:         { increment: 8,  decrement: 5 },
    [EnumTiers.Visionist]:      { increment: 8,  decrement: 5 },
    [EnumTiers.Sage]:           { increment: 5,  decrement: 5 },
    [EnumTiers.Thinker]:        { increment: 5,  decrement: 5 },
    [EnumTiers.Philosopher]:    { increment: 5,  decrement: 5 },
    [EnumTiers.Theorist]:       { increment: 5,  decrement: 5 },
    [EnumTiers.Mystic]:         { increment: 5,  decrement: 5 },
    [EnumTiers.Seer]:           { increment: 5,  decrement: 5 },
    [EnumTiers.Transcendent]:   { increment: 5,  decrement: 5 },
};

export const TIER_SETTINGS: Record<EnumTiers, Settings> = {
    [EnumTiers.Adept]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 2)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 2)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 2)
        .setQuestionSetting(EnumQuestionType.Syllogism, false, -1)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, false, -1)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction4D, false, -1)
        .setQuestionSetting(EnumQuestionType.Analogy, false, -1)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Scholar]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 2)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 2)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 2)
        .setQuestionSetting(EnumQuestionType.Syllogism, false, -1)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, false, -1)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction4D, false, -1)
        .setQuestionSetting(EnumQuestionType.Analogy, false, -1)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Savant]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 2)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 2)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 2)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 2)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, false, -1)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction4D, false, -1)
        .setQuestionSetting(EnumQuestionType.Analogy, false, -1)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Expert]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 2)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 2)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 2)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 2)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, false, -1)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction4D, false, -1)
        .setQuestionSetting(EnumQuestionType.Analogy, false, -1)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Mastermind]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 3)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 3)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction4D, false, -1)
        .setQuestionSetting(EnumQuestionType.Analogy, false, -1)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Enlightened]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 3)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 3)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction4D, false, -1)
        .setQuestionSetting(EnumQuestionType.Analogy, false, -1)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Visionary]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 3)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 3)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction4D, false, -1)
        .setQuestionSetting(EnumQuestionType.Analogy, false, -1)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Innovator]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 3)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 3)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, false, -1)
        .setQuestionSetting(EnumQuestionType.Direction4D, false, -1)
        .setQuestionSetting(EnumQuestionType.Analogy, false, -1)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Genius]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 3)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 3)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, false, -1)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Virtuoso]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 3)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 3)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 3)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, false, -1)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Luminary]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4) // TODO: Continue from here
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Illuminator]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Prodigy]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Intuitive]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Oracle]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Visionist]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Sage]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Thinker]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Philosopher]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Theorist]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Mystic]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Seer]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
    [EnumTiers.Transcendent]: new Settings()
        .setGenericEnable("meaningfulWords", true)
        .setGenericEnable("meta", false)
        .setGenericEnable("negation", false)
        .setQuestionSetting(EnumQuestionType.Distinction, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonNumerical, true, 4)
        .setQuestionSetting(EnumQuestionType.ComparisonChronological, true, 4)
        .setQuestionSetting(EnumQuestionType.Syllogism, true, 4)
        .setQuestionSetting(EnumQuestionType.LinearArrangement, true, 4)
        .setQuestionSetting(EnumQuestionType.CircularArrangement, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction, true, 3)
        .setQuestionSetting(EnumQuestionType.Direction3DSpatial, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction3DTemporal, true, 2)
        .setQuestionSetting(EnumQuestionType.Direction4D, true, 2)
        .setQuestionSetting(EnumQuestionType.Analogy, true, 3)
        .setQuestionSetting(EnumQuestionType.Binary, false, -1),
}