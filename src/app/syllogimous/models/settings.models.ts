import { b2n } from "../utils/engine.utils";
import { EnumQuestionType } from "./question.models";

const getNumOfEnabledQuestions = (settings: Settings, basicQuestionFilter: boolean) => {
    return Object.values(settings.question)
        .filter(qs => qs.basic === basicQuestionFilter)
        .reduce((a, c) => a + b2n(c.enabled), 0);
};

const getNumOfEnabledOperators = (settings: Settings) => {
    return Object.values(settings.enable.binary)
        .reduce((a, c) => a + b2n(c), 0);
};

export interface Picked<T> {
    picked: T[];
    remaining: T[];
}

export function canGenerateQuestion(
    questionType: EnumQuestionType,
    numOfPremises: number,
    settings: Settings
) {
    if (settings.question[questionType].basic) {
        return numOfPremises >= settings.question[questionType].min;
    }

    return numOfPremises >= settings.question[questionType].min 
        && getNumOfEnabledQuestions(settings, true) >= 2;
}

export function areSettingsInvalid(settings: Settings) {
    const numOfEnabledBasicQuestions = getNumOfEnabledQuestions(settings, true);
    const numOfEnabledQuestions = numOfEnabledBasicQuestions + getNumOfEnabledQuestions(settings, false);
    const numOfEnabledOperators = getNumOfEnabledOperators(settings);
    const isAnalogyEnabled = settings.question[EnumQuestionType.Analogy].enabled;
    const isBinaryEnabled = settings.question[EnumQuestionType.Binary].enabled;

    if (numOfEnabledQuestions < 1) {
        return "You need at least one question type";
    }
    if ((isAnalogyEnabled || isBinaryEnabled) && numOfEnabledBasicQuestions < 2) {
        return "Analogy/binary type of questions need at least two other basic question types";
    }
    if (isBinaryEnabled && numOfEnabledOperators < 2) {
        return "Binary needs at least two operators"
    }

    return null;
}

export enum EnumQuestionGroup {
    Comparison = "Comparison",
    Direction = "Direction",
    Arrangement = "Arrangement",
}

export class QuestionSetting {
    enabled: boolean;
    min: number;
    actual: number; // TODO: set via minmmax function
    max: number;
    basic: boolean; // A basic question type can be utilized by high-order questions
    group?: EnumQuestionGroup;

    constructor(
        enabled: boolean,
        min: number,
        max: number,
        basic: boolean,
        group?: EnumQuestionGroup
    ) {
        this.enabled = enabled;
        this.min = min;     // Min number of premises
        this.actual = min;  // Actual number of premises
        this.max = max;     // Max number of premises
        this.basic = basic;
        this.group = group;
    }

    clampNumOfPremises(numOfPremises: number) {
        return Math.max(this.min, Math.min(this.max, numOfPremises))
    }
}

export class Settings {
    question = {
        // Comparisons
        [EnumQuestionType.ComparisonNumerical]: new QuestionSetting(true, 2, 9, true, EnumQuestionGroup.Comparison),
        [EnumQuestionType.ComparisonChronological]: new QuestionSetting(true, 2, 9, true, EnumQuestionGroup.Comparison),
        // Directions
        [EnumQuestionType.Direction]: new QuestionSetting(true, 2, 9, true, EnumQuestionGroup.Direction),
        [EnumQuestionType.Direction3DSpatial]: new QuestionSetting(true, 2, 9, true, EnumQuestionGroup.Direction),
        [EnumQuestionType.Direction3DTemporal]: new QuestionSetting(true, 2, 9, true, EnumQuestionGroup.Direction),
        [EnumQuestionType.Direction4D]: new QuestionSetting(true, 2, 9, true, EnumQuestionGroup.Direction),
        // Arrangements
        [EnumQuestionType.LinearArrangement]: new QuestionSetting(true, 3, 9, false, EnumQuestionGroup.Arrangement),
        [EnumQuestionType.CircularArrangement]: new QuestionSetting(true, 3, 9, false, EnumQuestionGroup.Arrangement),
        // Others
        [EnumQuestionType.Distinction]: new QuestionSetting(true, 2, 9, true),
        [EnumQuestionType.Syllogism]: new QuestionSetting(true, 2, 9, true),
        [EnumQuestionType.Analogy]: new QuestionSetting(true, 3, 9, false),
        [EnumQuestionType.Binary]: new QuestionSetting(true, 4, 9, false),
    };

    enable = {
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
}
