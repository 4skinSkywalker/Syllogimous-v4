export interface Picked<T> {
    picked: T[];
    remaining: T[];
}

export interface ISettings {
    enableMeaningfulWords: boolean;
    enableMeta: boolean;
    enableNegation: boolean;
    distinction: [ boolean, number, number ];
    comparisonNumerical: [ boolean, number, number ];
    comparisonChronological: [ boolean, number, number ];
    direction: [ boolean, number, number ];
    syllogism: [ boolean, number, number ];
    direction3D: [ boolean, number, number ];
    direction4D: [ boolean, number, number ];
    analogy: [ boolean, number, number ];
    binary: [ boolean, number, number ];
    enableAnd: boolean;
    enableNand: boolean;
    enableOr: boolean;
    enableNor: boolean;
    enableXor: boolean;
    enableXnor: boolean;
}
