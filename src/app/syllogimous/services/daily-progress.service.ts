import { Injectable } from "@angular/core";
import { LS_DAILY_PROGRESS } from "../constants/local-storage.constants";

const DAILY_GOAL = 30 * 60 * 1000;
const WEEKLY_GOAL = 105 * 60 * 1000;

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
        return Math.max(0, Math.min(100, Math.floor(100 * (this.getDailyProgressLS()[isoDate] || 0) / DAILY_GOAL)));
    }

    getWeekStartDate(isoDate: string) {
        const date = new Date(isoDate);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff)).toISOString().split('T')[0];
    }

    calcWeeklyProgress(isoDate: string) {
        const weekStartDate = this.getWeekStartDate(isoDate);
        const dailyProgress = this.getDailyProgressLS();
        let weeklyTotal = 0;
        
        // Sum up all days in the week
        for (let i = 0; i < 7; i++) {
            const date = new Date(weekStartDate);
            date.setDate(date.getDate() + i);
            const currentDate = date.toISOString().split('T')[0];
            weeklyTotal += dailyProgress[currentDate] || 0;
        }

        return Math.max(0, Math.min(100, Math.floor(100 * weeklyTotal / WEEKLY_GOAL)));
    }

    getTimePlayed(isoDate: string) {
        return this.getDailyProgressLS()[isoDate] || 0;
    }
    
    getTimePlayedThisWeek(isoDate: string) {
        const weekStartDate = this.getWeekStartDate(isoDate);
        const dailyProgress = this.getDailyProgressLS();
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
}