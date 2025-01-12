import { Component, Input } from '@angular/core';
import { ProgressAndPerformanceService } from '../../services/progress-and-performance.service';
import { SyllogimousService } from '../../services/syllogimous.service';

@Component({
    selector: 'app-progress-and-performance',
    templateUrl: './progress-and-performance.component.html',
    styleUrls: ['./progress-and-performance.component.scss']
})
export class DailyProgressComponent {
    @Input("feedbackPage") feedbackPage = false;
    @Input("playgroundMode") playgroundMode = false;

    dailyProgressPercentage = 0;
    weeklyProgressPercentage = 0;
    trainingUnitPercentage = {
        right: 0,
        timeout: 0,
        wrong: 0,
        percentageRight: 0,
        percentageTimeout: 0,
        percentageWrong: 0
    };

    constructor(
        public sylSrv: SyllogimousService,
        private progressAndPerformanceService: ProgressAndPerformanceService
    ) {
        const today = progressAndPerformanceService.getToday();
        this.dailyProgressPercentage = progressAndPerformanceService.calcDailyProgress(today);
        this.weeklyProgressPercentage = progressAndPerformanceService.calcWeeklyProgress(today);
        this.trainingUnitPercentage = progressAndPerformanceService.calcTrainingUnitPercentages(sylSrv.question.type);
    }
}