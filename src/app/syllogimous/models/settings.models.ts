import { EnumQuestionType } from "./question.models";

const b2n = (b: boolean) => +b as number;

const getQtaEnabledBasicQuestions = (settings: Settings) => {
    return b2n(settings.distinction[0])
        + b2n(settings.comparisonNumerical[0])
        + b2n(settings.comparisonChronological[0])
        + b2n(settings.direction[0])
        + b2n(settings.syllogism[0])
        + b2n(settings.direction3DSpatial[0])
        + b2n(settings.direction3DTemporal[0])
        + b2n(settings.direction4D[0]);
};

const getQtaEnabledOperators = (settings: Settings) => {
    return b2n(settings.enableAnd)
        + b2n(settings.enableNand)
        + b2n(settings.enableOr)
        + b2n(settings.enableNor)
        + b2n(settings.enableXor)
        + b2n(settings.enableXnor);
};

const getQtaEnabledQuestions = (settings: Settings) => {
    return getQtaEnabledBasicQuestions(settings)
        + b2n(settings.analogy[0])
        + b2n(settings.binary[0]);
};

export interface Picked<T> {
    picked: T[];
    remaining: T[];
}

export function canGenerateQuestion(
    questionType: EnumQuestionType,
    qtaPremises: number,
    settings?: Settings
) {
    switch (questionType) {
        case EnumQuestionType.Syllogism:
        case EnumQuestionType.Distinction:
        case EnumQuestionType.ComparisonNumerical:
        case EnumQuestionType.ComparisonChronological:
        case EnumQuestionType.Direction:
        case EnumQuestionType.Direction3DSpatial:
        case EnumQuestionType.Direction3DTemporal:
        case EnumQuestionType.Direction4D: {
            return qtaPremises >= 2;
        }
        case EnumQuestionType.Analogy: {
            if (!settings) {
                return false;
            }
            return qtaPremises >= 3
                && getQtaEnabledBasicQuestions(settings) >= 2;
        }
        case EnumQuestionType.Binary: {
            if (!settings) {
                return false;
            }
            return qtaPremises >= 4
                && getQtaEnabledBasicQuestions(settings) >= 2;
        }
    }
    
    return false;
}

export function areSettingsInvalid(settings: Settings) {
    const qtaEnabledQuestions = getQtaEnabledQuestions(settings);
    const qtaEnabledBasicQuestions = getQtaEnabledBasicQuestions(settings);
    const qtaEnabledOperators = getQtaEnabledOperators(settings);

    if (qtaEnabledQuestions < 1) {
        return "You need at least one question type";
    }
    if ((settings.analogy[0] || settings.binary[0]) && qtaEnabledBasicQuestions < 2) {
        return "Analogy/binary type of questions need at least two other basic question types";
    }
    if (settings.binary[0] && qtaEnabledOperators < 2) {
        return "Binary needs at least two operators"
    }

    return null;
}

export class Settings {
    enableMeaningfulWords: boolean;
    enableMeta: boolean;
    enableNegation: boolean;
    distinction: [ boolean, number ];
    comparisonNumerical: [ boolean, number ];
    comparisonChronological: [ boolean, number ];
    direction: [ boolean, number ];
    syllogism: [ boolean, number ];
    direction3DSpatial: [ boolean, number ];
    direction3DTemporal: [ boolean, number ];
    direction4D: [ boolean, number ];
    analogy: [ boolean, number ];
    binary: [ boolean, number ];
    enableAnd: boolean;
    enableNand: boolean;
    enableOr: boolean;
    enableNor: boolean;
    enableXor: boolean;
    enableXnor: boolean;

    constructor() {
        this.enableMeaningfulWords = true;
        this.enableMeta = true;
        this.enableNegation = true;
        this.distinction = [ true, 2 ]; // min 2
        this.comparisonNumerical = [ true, 2 ]; // min 2
        this.comparisonChronological = [ true, 2 ]; // min 2
        this.direction = [ true, 2 ]; // min 2
        this.syllogism = [ true, 2 ]; // min 2
        this.direction3DSpatial = [ true, 2 ]; // min 2
        this.direction3DTemporal = [ true, 2 ]; // min 2
        this.direction4D = [ true, 2 ]; // min 2
        this.analogy = [ true, 3 ]; // min 3
        this.binary = [ true, 4 ];  // min 4
        this.enableAnd = true;
        this.enableNand = true;
        this.enableOr = true;
        this.enableNor = true;
        this.enableXor = true;
        this.enableXnor = true;
    }
}
