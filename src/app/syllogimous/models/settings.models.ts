import { EnumQuestionType } from "../constants/question.constants";
import { EnumQuestionGroup, COMPARISON_PARAMS, DIRECTION_PARAMS, ARRANGEMENT_PARAMS, BASIC_PARAMS, ANALOGY_PARAMS, BINARY_PARAMS, DEFAULT_ENABLED_FLAGS } from "../constants/settings.constants";
import { b2n } from "../utils/question.utils";

const getNumOfEnabledQuestions = (settings: Settings, basicQuestionFilter: boolean) => {
    return Object.values(settings.question)
        .filter(qs => qs.basic === basicQuestionFilter)
        .reduce((a, c) => a + b2n(c.enabled), 0);
};

const getNumOfEnabledOperators = (settings: Settings) => {
    return Object.values(settings.enabled.binary)
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
        return numOfPremises >= settings.question[questionType].minNumOfPremises;
    }

    return numOfPremises >= settings.question[questionType].minNumOfPremises 
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

export interface IQuestionSettingsParams {
    minNumOfPremises: number;
    maxNumOfPremises: number;
    basic: boolean;
    group?: EnumQuestionGroup;
    enabled: boolean;
    numOfPremises?: number;
}

export class QuestionSettings {
    enabled: boolean;
    minNumOfPremises: number; // Min number of premises
    private numOfPremises!: number; // Actual number of premises
    maxNumOfPremises: number; // Max number of premises
    basic: boolean; // Basic questions can be used by other questions (ex. Analogy, Binary, ...)
    group?: EnumQuestionGroup; // Group that this question belongs to (ex. Direction, ...)

    constructor(params: IQuestionSettingsParams) {
        this.minNumOfPremises = params.minNumOfPremises;
        this.maxNumOfPremises = params.maxNumOfPremises;
        this.basic = params.basic;
        this.group = params.group;

        // Some props are immutable because they are user for validation
        this.freezeProp("min");
        this.freezeProp("max");
        this.freezeProp("basic");
        this.freezeProp("group");
        
        this.enabled = params.enabled;
        this.setNumOfPremises(params.numOfPremises || params.minNumOfPremises);
    }
    
    freezeProp(prop: string) {
        Object.defineProperty(this, prop, { configurable: false, writable: false });
    }

    setNumOfPremises(numOfPremises: number) {
        this.numOfPremises = this.clampNumOfPremises(numOfPremises);
    }

    getNumOfPremises() {
        return this.numOfPremises;
    }

    clampNumOfPremises(numOfPremises: number) {
        return Math.max(this.minNumOfPremises, Math.min(this.maxNumOfPremises, numOfPremises))
    }
}

export class Settings {
    question!: Record<EnumQuestionType, QuestionSettings>;
    enabled: typeof DEFAULT_ENABLED_FLAGS;

    private configSettings?: Settings;

    constructor(settings?: Settings) {
        this.configSettings = settings;
        this.enabled = settings?.enabled || DEFAULT_ENABLED_FLAGS;
        //                                         Question Type            Default Config
        this.initQuestionSettings(EnumQuestionType.Distinction,             BASIC_PARAMS);
        this.initQuestionSettings(EnumQuestionType.ComparisonNumerical,     COMPARISON_PARAMS);
        this.initQuestionSettings(EnumQuestionType.ComparisonChronological, COMPARISON_PARAMS);
        this.initQuestionSettings(EnumQuestionType.Syllogism,               BASIC_PARAMS);
        this.initQuestionSettings(EnumQuestionType.Direction,               DIRECTION_PARAMS);
        this.initQuestionSettings(EnumQuestionType.Direction3DSpatial,      DIRECTION_PARAMS);
        this.initQuestionSettings(EnumQuestionType.Direction3DTemporal,     DIRECTION_PARAMS);
        this.initQuestionSettings(EnumQuestionType.Direction4D,             DIRECTION_PARAMS);
        this.initQuestionSettings(EnumQuestionType.LinearArrangement,       ARRANGEMENT_PARAMS);
        this.initQuestionSettings(EnumQuestionType.CircularArrangement,     ARRANGEMENT_PARAMS);
        this.initQuestionSettings(EnumQuestionType.Analogy,                 ANALOGY_PARAMS);
        this.initQuestionSettings(EnumQuestionType.Binary,                  BINARY_PARAMS);
    }

    initQuestionSettings(type: EnumQuestionType, defOpts: IQuestionSettingsParams) {
        if (!this.question) {
            this.question = {} as any;
        }
        this.question[type] = new QuestionSettings(
            // @ts-ignore
            this.configSettings?.question[type] || defOpts
        );
    }

    setEnable(prop: "meaningfulWords"|"meta"|"negation", value: boolean) {
        this.enabled[prop] = value;
        return this;
    }

    setQuestionSettings(type: EnumQuestionType, enabled: boolean, numOfPremises: number) {
        this.question[type].enabled = enabled;
        this.question[type].setNumOfPremises(numOfPremises);
        return this;
    }
}
