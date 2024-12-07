import { Injectable } from "@angular/core";
import { LS_DAILY_PROGRESS } from "../constants/local-storage.constants";

const GOAL = 15 * 60 * 1000;

@Injectable({
    providedIn: 'root'
})
export class DailyProgressService {
    getToday() {
        return new Date().toISOString().split("T")[0];
    }

    getDailyProgressLS() {
        const lsDailyProgress = localStorage.getItem(LS_DAILY_PROGRESS);
        if (!lsDailyProgress) {
            return {};
        }
        return JSON.parse(lsDailyProgress) as Record<string, number>;
    }

    setDailyProgressLS(isoDate: string, ms: number) {
        const dailyProgress = this.getDailyProgressLS();
        dailyProgress[isoDate] = dailyProgress[isoDate] || 0;
        dailyProgress[isoDate] += ms;
        localStorage.setItem(LS_DAILY_PROGRESS, JSON.stringify(dailyProgress));
    }

    calcDailyProgress(isoDate: string) {
        return Math.max(0, Math.min(100, Math.floor(100 * (this.getDailyProgressLS()[isoDate] || 0) / GOAL)));
    }
}