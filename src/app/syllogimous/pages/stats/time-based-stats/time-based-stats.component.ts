import { Component } from '@angular/core';
import { Question } from 'src/app/syllogimous/models/question.models';
import { SyllogimousService } from 'src/app/syllogimous/services/syllogimous.service';
import { formatTime } from 'src/app/utils/date';

@Component({
    selector: 'app-time-based-stats',
    templateUrl: './time-based-stats.component.html',
    styleUrls: ['./time-based-stats.component.css']
})
export class TimeBasedStatsComponent {
    formatTime = formatTime;

    questions: Question[] = [];
    totalPlayTime = 0;
    avgAnswer = 0;
    fastestAnswer = 0;
    slowestAnswer = 0;
    timeBasedStats: Record<string, any>; // TODO: This should be typed

    constructor(
        private sylSrv: SyllogimousService
    ) {
        this.questions = this.sylSrv.questionsFromLS;
        this.timeBasedStats = {};

        for (const q of this.questions) {
            const ps = ((q.premises.length < 6) ? String(q.premises.length) : "6+") as "2" | "3" | "4" | "5" | "6+";

            this.timeBasedStats[ps] = this.timeBasedStats[ps] || {
                sum: 0,
                count: 0,
                fastest: 0,
                slowest: 0,
            };

            const dt = q.answeredAt - q.createdAt;
            this.totalPlayTime += dt;

            this.timeBasedStats[ps].sum += dt;
            this.timeBasedStats[ps].count += 1;

            if (q.userAnswer !== undefined) {
                if (this.fastestAnswer === 0 || dt < this.fastestAnswer) {
                    this.fastestAnswer = dt;
                }
                if (this.slowestAnswer === 0 || dt > this.slowestAnswer) {
                    this.slowestAnswer = dt;
                }

                if (this.timeBasedStats[ps].fastest === 0 || dt < this.timeBasedStats[ps].fastest) {
                    this.timeBasedStats[ps].fastest = dt;
                }
                if (this.timeBasedStats[ps].slowest === 0 || dt > this.timeBasedStats[ps].slowest) {
                    this.timeBasedStats[ps].slowest = dt;
                }
            }
        }

        console.log("Time based stats", this.timeBasedStats);
    }
}
