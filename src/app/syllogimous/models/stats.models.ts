import { EnumQuestionType } from "./question.models";

export class TypeBasedStats {
    [EnumQuestionType.Syllogism]: TypeBasedStatsInner;
    [EnumQuestionType.Distinction]: TypeBasedStatsInner;
    [EnumQuestionType.ComparisonNumerical]: TypeBasedStatsInner;
    [EnumQuestionType.ComparisonChronological]: TypeBasedStatsInner;
    [EnumQuestionType.Binary]: TypeBasedStatsInner;
    [EnumQuestionType.Direction]: TypeBasedStatsInner;
    [EnumQuestionType.Direction3D]: TypeBasedStatsInner;
    [EnumQuestionType.Direction4D]: TypeBasedStatsInner;
    [EnumQuestionType.Analogy]: TypeBasedStatsInner;
    [EnumQuestionType.Unknown]: TypeBasedStatsInner;

    constructor() {
        this[EnumQuestionType.Syllogism] = new TypeBasedStatsInner();
        this[EnumQuestionType.Distinction] = new TypeBasedStatsInner();
        this[EnumQuestionType.ComparisonNumerical] = new TypeBasedStatsInner();
        this[EnumQuestionType.ComparisonChronological] = new TypeBasedStatsInner();
        this[EnumQuestionType.Binary] = new TypeBasedStatsInner();
        this[EnumQuestionType.Direction] = new TypeBasedStatsInner();
        this[EnumQuestionType.Direction3D] = new TypeBasedStatsInner();
        this[EnumQuestionType.Direction4D] = new TypeBasedStatsInner();
        this[EnumQuestionType.Analogy] = new TypeBasedStatsInner();
        this[EnumQuestionType.Unknown] = new TypeBasedStatsInner();
    }
}

export class TypeBasedStatsInner {
    type: EnumQuestionType;
    completed: number;
    accuracy: number;
    stats: {
        "2": TypeBasedStatsInner2;
        "3": TypeBasedStatsInner2;
        "4": TypeBasedStatsInner2;
        "5": TypeBasedStatsInner2;
        "6+": TypeBasedStatsInner2;
    };
    
    constructor() {
        this.type = EnumQuestionType.Unknown;
        this.completed = 0;
        this.accuracy = 0;
        this.stats = {
            "2": new TypeBasedStatsInner2(),
            "3": new TypeBasedStatsInner2(),
            "4": new TypeBasedStatsInner2(),
            "5": new TypeBasedStatsInner2(),
            "6+": new TypeBasedStatsInner2()
        };
    }
}

export class TypeBasedStatsInner2 {
    sum: number;
    count: number;
    fastest: number;
    slowest: number;
    correct: number;
    incorrect: number;
    timeout: number;
    last10Sum: number;
    last10Count: number;
    last10Fastest: number;
    last10Slowest: number;
    last10Correct: number;
    last10Incorrect: number;
    last10Timeout: number;

    constructor() {
        this.sum = 0;
        this.count = 0;
        this.fastest = 0;
        this.slowest = 0;
        this.correct = 0;
        this.incorrect = 0;
        this.timeout = 0;
        this.last10Sum = 0;
        this.last10Count = 0;
        this.last10Fastest = 0;
        this.last10Slowest = 0;
        this.last10Correct = 0;
        this.last10Incorrect = 0;
        this.last10Timeout = 0;
    }
}