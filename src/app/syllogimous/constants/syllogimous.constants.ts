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

export const ORDERED_TIERS = Object.keys(TIER_SCORE_RANGES) as EnumTiers[];

export const TIER_SCORE_ADJUSTMENTS = ORDERED_TIERS.reduce((tierIncrementMap, tier, idx) => {
    const increments = [
        { increment: 10, decrement: 5 },
        { increment: 8,  decrement: 5 },
        { increment: 5,  decrement: 5 },
    ];
    const tiersToIncrementsRatio = Math.floor(ORDERED_TIERS.length/increments.length);
    const incrementIdx = Math.min(Math.floor(idx/tiersToIncrementsRatio), increments.length-1);
    tierIncrementMap[tier] = increments[incrementIdx];
    return tierIncrementMap;
}, {} as Record<EnumTiers, { increment: number, decrement: number }>);

function calcSettingsFromTier(tierToCalc: EnumTiers) {
    const orderedQuestionGroups = [
        [ 
            EnumQuestionType.Distinction,
            EnumQuestionType.ComparisonNumerical,
            EnumQuestionType.ComparisonChronological,
        ],
        [
            EnumQuestionType.Syllogism,
            EnumQuestionType.LinearArrangement,
        ],
        [
            EnumQuestionType.CircularArrangement,
            EnumQuestionType.Direction,
        ],
        [
            EnumQuestionType.Direction3DSpatial,
            EnumQuestionType.Direction3DTemporal,
            EnumQuestionType.Analogy,
        ],
        [
            EnumQuestionType.Direction4D,
            EnumQuestionType.Binary,
        ],
    ];

    // Create new settings with defaults
    const tierSettings = new Settings()
        .setEnable("meta", false)
        .setEnable("negation", false);
    const questionTypes = Object.values(EnumQuestionType) as EnumQuestionType[];
    for (const qt of questionTypes) {
        tierSettings.setQuestionSettings(qt, false, -1);
    }
    
    // Algorithm to calculate settings progression based on tier
    for (let i = 0; i < ORDERED_TIERS.length; i++) {
        const currTier = ORDERED_TIERS[i];
        for (let j = 0; j <= Math.min(i, orderedQuestionGroups.length-1); j++) {
            const qts = orderedQuestionGroups[j];
            for (const qt of qts) {
                const qs = tierSettings.question[qt];
                tierSettings.setQuestionSettings(qt, true, (qs.enabled ? qs.getNumOfPremises()+1 : qs.getNumOfPremises()));
            }
        }
        if (tierToCalc === currTier) break;
    }

    // Enable meta and negation as soon as all questions have been enabled
    const allQuestionsEnabled = Object.values(tierSettings.question).every(qs => qs.enabled);
    if (allQuestionsEnabled) {
        tierSettings
            .setEnable("meta", true)
            .setEnable("negation", true);
    }

    return tierSettings;
}

export const TIER_SETTINGS = ORDERED_TIERS.reduce((tierSettingsMap, tier) => {
    tierSettingsMap[tier] = calcSettingsFromTier(tier);
    return tierSettingsMap;
}, {} as Record<EnumTiers, Settings>);

function showEnabledQuestionTypes(tier: EnumTiers, settings: Settings) {
    console.log("ENABLED QUESTION TYPES FOR", tier.toUpperCase());
    console.log("==============================================");
    for (const qt of Object.values(EnumQuestionType)) {
        const qs = settings.question[qt];
        if (qs.enabled) {
            console.log(qt.toUpperCase(), "WITH", qs.getNumOfPremises(), "PREMISES");
        }
    }
    if (settings.enable.meta || settings.enable.negation) {
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    }
    if (settings.enable.meta) {
        console.log("WITH META")
    }
    if (settings.enable.negation) {
        console.log("WITH NEGATION")
    }
}

for (const tier of ORDERED_TIERS) {
    showEnabledQuestionTypes(tier, calcSettingsFromTier(tier));
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}