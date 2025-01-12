import { Injectable } from "@angular/core";
import { LS_DAILY_GOAL, LS_DAILY_PROGRESS, LS_TRAINING_UNIT, LS_WEEKLY_GOAL } from "../constants/local-storage.constants";
import { EnumQuestionType } from "../constants/question.constants";
import { questionTypeMinNumOfPremises } from "../constants/settings.constants";

export const DEFAULT_DAILY_GOAL = 30;
export const DEFAULT_WEEKLY_GOAL = 120;
export const DEFAULT_TRAINING_UNIT_LENGTH = 10;
export const DEFAULT_PREMISES_UP_THRESHOLD = 0.8;
export const DEFAULT_PREMISES_DOWN_THRESHOLD = 0.6;

export interface ITrainingUnit {
    premises: number;
    right: number;
    timeout: number;
    wrong: number;
}

@Injectable({
    providedIn: 'root'
})
export class ProgressAndPerformanceService {
    get DAILY_GOAL() {
        const dailyLS = localStorage.getItem(LS_DAILY_GOAL);
        return Number(dailyLS || DEFAULT_DAILY_GOAL) * 60 * 1000;
    }
    get WEEKLY_GOAL() {
        const weeklyLS = localStorage.getItem(LS_WEEKLY_GOAL);
        return Number(weeklyLS || DEFAULT_WEEKLY_GOAL) * 60 * 1000;
    }

    getToday() {
        return new Date().toISOString().split("T")[0];
    }

    getDailyProgress() {
        const lsDailyProgress = localStorage.getItem(LS_DAILY_PROGRESS);
        if (!lsDailyProgress) {
            return {};
        }
        return JSON.parse(lsDailyProgress) as Record<string, number>;
    }

    setDailyProgress(isoDate: string, ms: number) {
        const dailyProgress = this.getDailyProgress();
        dailyProgress[isoDate] = dailyProgress[isoDate] || 0;
        dailyProgress[isoDate] += ms;
        localStorage.setItem(LS_DAILY_PROGRESS, JSON.stringify(dailyProgress));
    }

    calcDailyProgress(isoDate: string) {
        return Math.max(0, Math.min(100, Math.floor(100 * (this.getDailyProgress()[isoDate] || 0) / this.DAILY_GOAL)));
    }

    getWeekStartDate(isoDate: string) {
        const date = new Date(isoDate);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff)).toISOString().split('T')[0];
    }

    calcWeeklyProgress(isoDate: string) {
        const weekStartDate = this.getWeekStartDate(isoDate);
        const dailyProgress = this.getDailyProgress();
        let weeklyTotal = 0;
        
        // Sum up all days in the week
        for (let i = 0; i < 7; i++) {
            const date = new Date(weekStartDate);
            date.setDate(date.getDate() + i);
            const currentDate = date.toISOString().split('T')[0];
            weeklyTotal += dailyProgress[currentDate] || 0;
        }

        return Math.max(0, Math.min(100, Math.floor(100 * weeklyTotal / this.WEEKLY_GOAL)));
    }

    getTimePlayed(isoDate: string) {
        return this.getDailyProgress()[isoDate] || 0;
    }
    
    getTimePlayedThisWeek(isoDate: string) {
        const weekStartDate = this.getWeekStartDate(isoDate);
        const dailyProgress = this.getDailyProgress();
        let weeklyTotal = 0;
        
        // Sum up all days in the week
        for (let i = 0; i < 7; i++) {
            const date = new Date(weekStartDate);
            date.setDate(date.getDate() + i);
            const currentDate = date.toISOString().split('T')[0];
            weeklyTotal += dailyProgress[currentDate] || 0;
        }
    
        return weeklyTotal;
    }

    getTrainingUnit(type: EnumQuestionType) {
        const ls = localStorage.getItem(LS_TRAINING_UNIT + type);
        if (!ls) {
            return {
                premises: questionTypeMinNumOfPremises[type],
                right: 0,
                timeout: 0,
                wrong: 0
            };
        }
        return JSON.parse(ls) as ITrainingUnit;
    }

    getAllTrainingUnits() {
        const typeTrainingUnitMap = {} as Record<EnumQuestionType, ITrainingUnit>;
        for (const type of Object.values(EnumQuestionType)) {
            typeTrainingUnitMap[type] = this.getTrainingUnit(type);
        }
        return typeTrainingUnitMap;
    }

    updateTrainingUnit(
        type: EnumQuestionType,
        opts: {
            premises?: number;
            right?: number;
            timeout?: number;
            wrong?: number;
        }
    ) {
        const trainingUnit = this.getTrainingUnit(type);
        if (opts.premises) {
            opts.premises = Math.max(questionTypeMinNumOfPremises[type], opts.premises);
        }
        trainingUnit.premises += opts.premises || 0;
        trainingUnit.right += opts.right || 0;
        trainingUnit.timeout += opts.timeout || 0;
        trainingUnit.wrong += opts.wrong || 0;
        localStorage.setItem(LS_TRAINING_UNIT + type, JSON.stringify(trainingUnit));
    }

    restartTrainingUnit(type: EnumQuestionType) {
        const trainingUnit = this.getTrainingUnit(type);
        trainingUnit.right = 0;
        trainingUnit.timeout = 0;
        trainingUnit.wrong = 0;
        localStorage.setItem(LS_TRAINING_UNIT + type, JSON.stringify(trainingUnit));
    }

    calcTrainingUnitPercentages(type: EnumQuestionType) {
        const { right, timeout, wrong } = this.getTrainingUnit(type);
        const percentageRight = Math.max(0, Math.min(1, right / DEFAULT_TRAINING_UNIT_LENGTH)) * 100;
        const percentageTimeout = Math.max(0, Math.min(1, timeout / DEFAULT_TRAINING_UNIT_LENGTH)) * 100;
        const percentageWrong = Math.max(0, Math.min(1, wrong / DEFAULT_TRAINING_UNIT_LENGTH)) * 100;
        return {
            right,
            timeout,
            wrong,
            percentageRight,
            percentageTimeout,
            percentageWrong
        };
    }
}