export interface ImmediateInference {
    kind: SylKind;
    conclKind: SylKind;
    swap: boolean;
}
export type SylKind = "all" | "no" | "some" | "some_not";
export type SylPremise = [string, SylKind, string];

export interface PolysyllogismResult {
    premises: SylPremise[];
    conclusion: SylPremise;
    conclusionIsTrue: boolean;
}