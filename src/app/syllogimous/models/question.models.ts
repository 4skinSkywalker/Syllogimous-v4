import { EnumArrangements, EnumQuestionType } from "../constants/question.constants";

export interface IArrangementRelationship {
    description: EnumArrangements;
    steps: number;
}

export interface IArrangementPremise {
    a: string;
    b: string;
    relationship: IArrangementRelationship;
    metaRelationships: IArrangementPremise[],
    uid: string;
}

export interface IDirectionProposition {
    pair: [ [ string, number, number ], [ string, number, number ] ];
    trasversalDifference?: number;
    cardinals: [string, number][];
    relationship: string;
    uid: string;
}

export interface IDirection3DProposition {
    pair: [ [ string, number, number, number ], [ string, number, number, number ] ];
    trasversalDifference: number;
    cardinals: [string, number][];
    relationship: string;
    uid: string;
}

export class Question {
    instructions?: string[];
    notes?: string[];
    type: EnumQuestionType;
    isValid = false;
    premises: string[] = [];
    conclusion: string | string[] = "";
    createdAt = new Date().getTime();
    answeredAt = new Date().getTime();
    userAnswer?: boolean;
    negations = 0;
    metaRelations = 0;
    timerTypeOnAnswer = "0";
    userScore = 0;
    playgroundMode = false;
    // Technical fields
    rule = "";
    bucket: string[] = [];
    buckets: string[][][] = [];
    coords: [string, number, number][] = [];
    coords3D: [string, number, number, number][] = [];
    graphPremises: [string, string, string][] = [];
    graphConclusion: [string, string, string][] = [];

    constructor(type: EnumQuestionType) {
        this.type = type;
    }
}