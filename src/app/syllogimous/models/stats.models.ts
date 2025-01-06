import { EnumQuestionType } from "../constants/question.constants";

export class TypeBasedStats {
    [EnumQuestionType.Syllogism] = new TypeBasedStatsInner(EnumQuestionType.Syllogism);
    [EnumQuestionType.Distinction] = new TypeBasedStatsInner(EnumQuestionType.Distinction);
    [EnumQuestionType.ComparisonNumerical] = new TypeBasedStatsInner(EnumQuestionType.ComparisonNumerical);
    [EnumQuestionType.ComparisonChronological] = new TypeBasedStatsInner(EnumQuestionType.ComparisonChronological);
    [EnumQuestionType.Binary] = new TypeBasedStatsInner(EnumQuestionType.Binary);
    [EnumQuestionType.Direction] = new TypeBasedStatsInner(EnumQuestionType.Direction);
    [EnumQuestionType.Direction3DSpatial] = new TypeBasedStatsInner(EnumQuestionType.Direction3DSpatial);
    [EnumQuestionType.Direction3DTemporal] = new TypeBasedStatsInner(EnumQuestionType.Direction3DTemporal);
    [EnumQuestionType.Analogy] = new TypeBasedStatsInner(EnumQuestionType.Analogy);
    [EnumQuestionType.LinearArrangement] = new TypeBasedStatsInner(EnumQuestionType.LinearArrangement);
    [EnumQuestionType.CircularArrangement] = new TypeBasedStatsInner(EnumQuestionType.CircularArrangement);
}

export class TypeBasedStatsInner {
    type: EnumQuestionType;
    completed = 0;
    accuracy = 0;
    stats = {
        "2": new TypeBasedStatsInner2(),
        "3": new TypeBasedStatsInner2(),
        "4": new TypeBasedStatsInner2(),
        "5": new TypeBasedStatsInner2(),
        "6+": new TypeBasedStatsInner2(),
    };
    
    constructor(type: EnumQuestionType) {
        this.type = type;
    }
}

export class TypeBasedStatsInner2 {
    sum = 0;
    count = 0;
    fastest = 0;
    slowest = 0;
    correct = 0;
    incorrect = 0;
    timeout = 0;
    last10Sum = 0;
    last10Count = 0;
    last10Fastest = 0;
    last10Slowest = 0;
    last10Correct = 0;
    last10Incorrect = 0;
    last10Timeout = 0;
}