export enum EnumQuestionType {
    Distinction = "Distinction",
    ComparisonNumerical = "Comparison Numerical",
    ComparisonChronological = "Comparison Chronological",
    Syllogism = "Syllogism",
    Direction = "Direction",
    Direction3DSpatial = "Direction3D Spatial",
    Direction3DTemporal = "Direction3D Temporal",
    Direction4D = "Direction4D",
    LinearArrangement = "Linear Arrangement",
    CircularArrangement = "Circular Arrangement",
    Analogy = "Analogy",
    Binary = "Binary",
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