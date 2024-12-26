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
}

export enum EnumArrangementRelations {
    AdjLeft = "is to the immediate left of",
    AdjRight = "is to the immediate right of",
    Next = "is next to",
    NotNext = "is not next to",
    Left = "is at the left of",
    Right = "is at the right of",
    InFront = "is diametrically opposite to", // not used by linear
    NotInFront = "is not diametrically opposite to", // not used by linear
};

export class Question {
    instructions?: string;
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

    constructor(type: EnumQuestionType) {
        this.type = type;
    }
}