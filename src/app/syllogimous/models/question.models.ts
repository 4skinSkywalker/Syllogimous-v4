import { EnumArrangements, EnumQuestionType } from "../constants/question.constants";

export interface IArrangementRelationship {
    description: EnumArrangements;
    steps: number;
}

export interface IArrangementPremise {
    a: string;
    b: string;
    relationship: IArrangementRelationship;
    uid: string;
}

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