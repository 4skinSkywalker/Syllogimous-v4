import { jsonCopy } from "src/app/utils/json";
import { EnumQuestionType } from "../constants/question.constants";
import { EnumQuestionGroup, DEFAULT_ENABLED_FLAGS, questionTypeSettingParams } from "../constants/settings.constants";
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
    const enoughPremises = numOfPremises >= settings.question[questionType].minNumOfPremises;
    if (settings.question[questionType].basic || questionType === EnumQuestionType.GraphMatching) {
        return enoughPremises;
    }
    return enoughPremises && getNumOfEnabledQuestions(settings, true) >= 2;
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
        this.freezeProp("minNumOfPremises");
        this.freezeProp("maxNumOfPremises");
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
        this.enabled = settings?.enabled || jsonCopy(DEFAULT_ENABLED_FLAGS);
        this.initQuestionSettings(EnumQuestionType.Distinction);
        this.initQuestionSettings(EnumQuestionType.ComparisonNumerical);
        this.initQuestionSettings(EnumQuestionType.ComparisonChronological);
        this.initQuestionSettings(EnumQuestionType.Syllogism);
        this.initQuestionSettings(EnumQuestionType.LinearArrangement);
        this.initQuestionSettings(EnumQuestionType.CircularArrangement);
        this.initQuestionSettings(EnumQuestionType.Direction);
        this.initQuestionSettings(EnumQuestionType.Direction3DSpatial);
        this.initQuestionSettings(EnumQuestionType.Direction3DTemporal);
        this.initQuestionSettings(EnumQuestionType.GraphMatching);
        this.initQuestionSettings(EnumQuestionType.Analogy);
        this.initQuestionSettings(EnumQuestionType.Binary);
    }

    initQuestionSettings(type: EnumQuestionType) {
        if (!this.question) {
            this.question = {} as any;
        }
        this.question[type] = new QuestionSettings(
            // @ts-ignore
            this.configSettings?.question[type] || questionTypeSettingParams[type]
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
