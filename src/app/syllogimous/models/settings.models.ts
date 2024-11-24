export interface Picked<T> {
    picked: T[];
    remaining: T[];
}

export interface ISettings {
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
}
