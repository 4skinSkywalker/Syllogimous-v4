import { Injectable } from "@angular/core";
import { Question } from "../models/question.models";
import { SyllogimousService } from "./syllogimous.service";

export interface TypeBasedPromiseLengthStats {
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
}

@Injectable({
    providedIn: "root"
})
export class StatsService {
    questions: Question[] = [];
    types: string[] = [];
    typeBasedStats: Record<string, { type: string, completed: number, accuracy: number, stats: Record<string, TypeBasedPromiseLengthStats> }> = {};

    constructor(
        public sylSrv: SyllogimousService
    ) { }

    ngOnInit() {
        this.calcStats();
    }

    calcStats() {
        this.questions = this.sylSrv.questionsFromLS;

        this.types = [ ...new Set(this.questions.map(q => q.type)) ];
        this.typeBasedStats = this.types.reduce((acc, curr) => (acc[curr] = { type: "", completed: 0, accuracy: 0, stats: {} }, acc), {} as Record<string, any>);
        this.types
            .map(type => this.questions.filter(q => q.type === type))
            .forEach((questions, idx) => {
                const type = this.types[idx];

                this.typeBasedStats[type].type = type;
                this.typeBasedStats[type].completed = questions.length;
                this.typeBasedStats[type].accuracy = questions.length && (questions.filter(q => q.userAnswer === q.isValid).length / questions.length);

                [...questions].reverse().forEach((q, i) => {
                    const ps = (q.premises.length < 6) ? q.premises.length : "6+";
                    this.typeBasedStats[type].stats[ps] = this.typeBasedStats[type].stats[ps] || {
                        sum: 0,
                        count: 0,
                        fastest: 0,
                        slowest: 0,
                        correct: 0,
                        incorrect: 0,
                        timeout: 0,
                        last10Sum: 0,
                        last10Count: 0,
                        last10Fastest: 0,
                        last10Slowest: 0,
                        last10Correct: 0,
                        last10Incorrect: 0,
                        last10Timeout: 0,
                    };
        
                    const dt = q.answeredAt - q.createdAt;
        
                    this.typeBasedStats[type].stats[ps].sum += dt;
                    this.typeBasedStats[type].stats[ps].count += 1;

                    if (q.userAnswer == undefined) {
                        this.typeBasedStats[type].stats[ps].timeout++;
                    } else if (q.userAnswer === q.isValid) {
                        this.typeBasedStats[type].stats[ps].correct++;
                    } else {
                        this.typeBasedStats[type].stats[ps].incorrect++;
                    }
        
                    if (q.userAnswer !== undefined) {
                        if (this.typeBasedStats[type].stats[ps].fastest === 0 || dt < this.typeBasedStats[type].stats[ps].fastest) {
                            this.typeBasedStats[type].stats[ps].fastest = dt;
                        }
                        if (this.typeBasedStats[type].stats[ps].slowest === 0 || dt > this.typeBasedStats[type].stats[ps].slowest) {
                            this.typeBasedStats[type].stats[ps].slowest = dt;
                        }
                    }

                    // Calculate last 10 questions stats
                    if (i < 10) {
                        this.typeBasedStats[type].stats[ps].last10Sum += dt;
                        this.typeBasedStats[type].stats[ps].last10Count += 1;

                        if (q.userAnswer == undefined) {
                            this.typeBasedStats[type].stats[ps].last10Timeout++;
                        } else if (q.userAnswer === q.isValid) {
                            this.typeBasedStats[type].stats[ps].last10Correct++;
                        } else {
                            this.typeBasedStats[type].stats[ps].last10Incorrect++;
                        }
            
                        if (q.userAnswer !== undefined) {
                            if (this.typeBasedStats[type].stats[ps].last10Fastest === 0 || dt < this.typeBasedStats[type].stats[ps].last10Fastest) {
                                this.typeBasedStats[type].stats[ps].last10Fastest = dt;
                            }
                            if (this.typeBasedStats[type].stats[ps].last10Slowest === 0 || dt > this.typeBasedStats[type].stats[ps].last10Slowest) {
                                this.typeBasedStats[type].stats[ps].last10Slowest = dt;
                            }
                        }
                    }
                });
            });

        console.log("stats", { types: this.types, typeBasedStats: this.typeBasedStats });
    }
}