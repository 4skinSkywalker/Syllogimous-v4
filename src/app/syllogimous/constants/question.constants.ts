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
    AdjLeft = "is adjacent to the left of",
    AdjRight = "is adjacent to the right of",
    Next = "is next to",
    NotNext = "is not next to",
    Left = "is # steps left of",
    Right = "is # steps right of",
    InFront = "is diametrically opposite to", // not used by linear
    NotInFront = "is not diametrically opposite to", // not used by linear
};