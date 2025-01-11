import { Component, Input } from '@angular/core';
import { DailyProgressService } from '../../services/daily-progress.service';

@Component({
    selector: 'app-daily-progress',
    templateUrl: './daily-progress.component.html',
    styleUrls: ['./daily-progress.component.scss']
})
export class DailyProgressComponent {
    @Input("hideDaily") hideDaily = false;
    @Input("hideWeekly") hideWeekly = false;
    @Input("hideTrainingUnit") hideTrainingUnit = false;

    dailyProgressPercentage = 0;
    weeklyProgressPercentage = 0;
    trainingUnitPercentage = {
        right: 0,
        rightPerc: 0,
        timeout: 0,
        timeoutPerc: 0,
        wrong: 0,
        wrongPerc: 0
    };

    constructor(
        private dailyProgressService: DailyProgressService
    ) {
        const today = dailyProgressService.getToday();
        this.dailyProgressPercentage = dailyProgressService.calcDailyProgress(today);
        this.weeklyProgressPercentage = dailyProgressService.calcWeeklyProgress(today);
        this.trainingUnitPercentage = dailyProgressService.calcTrainingUnitsPercentage();
    }
}