import { EnumQuestionType } from "../constants/question.constants";
import { EnumQuestionGroup, COMPARISON_OPTIONS, DIRECTION_OPTIONS, ARRANGEMENT_OPTIONS, BASIC_OPTIONS, ANALOGY_OPTIONS, BINARY_OPTIONS } from "../constants/settings.constants";
import { b2n } from "../utils/engine.utils";

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

export interface IQuestionSettingsOpts {
    enabled: boolean;
    min: number;
    max: number;
    basic: boolean;
    group?: EnumQuestionGroup;
}

export class QuestionSettings {
    enabled: boolean;
    min: number; // Min number of premises
    private _actual!: number; // Actual number of premises
    set actual(numOfPremises: number) {
        this._actual = this.clampNumOfPremises(numOfPremises);
    }
    get actual() {
        return this._actual;
    }
    max: number; // Max number of premises
    basic: boolean; // Basic questions can be used by other questions (ex. Analogy, Binary, ...)
    group?: EnumQuestionGroup; // Group that this question belongs to (ex. Direction, ...)

    constructor(opt: IQuestionSettingsOpts) {
        this.min = opt.min;
        this.max = opt.max;
        this.basic = opt.basic;
        this.group = opt.group;

        // Some props are immutable because they are user for validation
        this.freezeProp("min");
        this.freezeProp("max");
        this.freezeProp("basic");
        this.freezeProp("group");
        
        this.enabled = opt.enabled;
        this.actual = opt.min;
    }
    
    freezeProp(prop: string) {
        Object.defineProperty(this, prop, { configurable: false, writable: false });
    }

    clampNumOfPremises(numOfPremises: number) {
        return Math.max(this.min, Math.min(this.max, numOfPremises))
    }
}

export class Settings {
    question = {
        // Comparisons
        [EnumQuestionType.ComparisonNumerical]: new QuestionSettings(COMPARISON_OPTIONS),
        [EnumQuestionType.ComparisonChronological]: new QuestionSettings(COMPARISON_OPTIONS),
        // Directions
        [EnumQuestionType.Direction]: new QuestionSettings(DIRECTION_OPTIONS),
        [EnumQuestionType.Direction3DSpatial]: new QuestionSettings(DIRECTION_OPTIONS),
        [EnumQuestionType.Direction3DTemporal]: new QuestionSettings(DIRECTION_OPTIONS),
        [EnumQuestionType.Direction4D]: new QuestionSettings(DIRECTION_OPTIONS),
        // Arrangements
        [EnumQuestionType.LinearArrangement]: new QuestionSettings(ARRANGEMENT_OPTIONS),
        [EnumQuestionType.CircularArrangement]: new QuestionSettings(ARRANGEMENT_OPTIONS),
        // Others
        [EnumQuestionType.Distinction]: new QuestionSettings(BASIC_OPTIONS),
        [EnumQuestionType.Syllogism]: new QuestionSettings(BASIC_OPTIONS),
        [EnumQuestionType.Analogy]: new QuestionSettings(ANALOGY_OPTIONS),
        [EnumQuestionType.Binary]: new QuestionSettings(BINARY_OPTIONS),
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

    setEnable(prop: "meaningfulWords"|"meta"|"negation", value: boolean) {
        this.enable[prop] = value;
        return this;
    }

    setQuestionSetting(type: EnumQuestionType, enabled: boolean, numOfPremises: number) {
        this.question[type].enabled = enabled;
        this.question[type].actual = numOfPremises;

        // Enable/disable all operators at once on binary questions
        if (type === EnumQuestionType.Binary) {
            for (const key in this.enable.binary) {
                (this.enable.binary as any)[key] = enabled;
            }
        }
        return this;
    }
}
