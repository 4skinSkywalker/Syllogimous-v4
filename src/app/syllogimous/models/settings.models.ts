export interface Picked<T> {
    picked: T[];
    remaining: T[];
}

export function areSettingsInvalid(settings: Settings) {
    // TODO: num of premises check is in the generator functions, should be moved here?
    if (
        !settings.distinction[0] &&
        !settings.comparisonNumerical[0] &&
        !settings.comparisonChronological[0] &&
        !settings.direction[0] &&
        !settings.syllogism[0] &&
        !settings.direction3D[0] &&
        !settings.direction4D[0] &&
        !settings.analogy[0] &&
        !settings.binary[0]
    ) {
        return "You need at least one question type";
    }

    if (
        !settings.distinction[0] &&
        !settings.comparisonNumerical[0] &&
        !settings.comparisonChronological[0] &&
        !settings.direction[0] &&
        !settings.syllogism[0] &&
        !settings.direction3D[0] &&
        !settings.direction4D[0] &&
        (settings.analogy[0] || settings.binary[0])
    ) {
        return "Analogy/binary type of questions need at least on other basic question types";
    }

    if (
        settings.binary &&
        !settings.enableAnd &&
        !settings.enableNand &&
        !settings.enableOr &&
        !settings.enableNor &&
        !settings.enableXor &&
        !settings.enableXnor
    ) {
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
    direction3D: [ boolean, number ];
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
        this.direction3D = [ true, 2 ]; // min 2
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
