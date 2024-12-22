export enum EnumQuestionType {
    Syllogism = "Syllogism",
    Distinction = "Distinction",
    ComparisonNumerical = "Comparison Numerical",
    ComparisonChronological = "Comparison Chronological",
    Binary = "Binary",
    Direction = "Direction",
    Direction3DSpatial = "Direction3D Spatial",
    Direction3DTemporal = "Direction3D Temporal",
    Direction4D = "Direction4D",
    Analogy = "Analogy",
    LinearArrangement = "Linear Arrangement",
    CircularArrangement = "Circular Arrangement",
    Unknown = "Unknown",
}

export class Question {
    type: EnumQuestionType;
    isValid = false;
    rule = "";
    bucket: string[] = [];
    buckets: string[][][] = [];
    wordCoordMap: Record<string, [number, number] | [number, number, number] | [number, number, number, number]> = {};
    premises: string[] = [];
    conclusion = "";
    createdAt = new Date().getTime();
    answeredAt = new Date().getTime();
    userAnswer?: boolean;
    negations = 0;
    metaRelations = 0;
    timerTypeOnAnswer = "0";
    userScore = 0;
    playgroundMode = false;

    constructor(
        type: EnumQuestionType
    ) {
        this.type = type;
    }
}