import { Component } from '@angular/core';
import { DailyProgressService } from '../../services/daily-progress.service';

@Component({
    selector: 'app-daily-progress',
    templateUrl: './daily-progress.component.html',
    styleUrls: ['./daily-progress.component.scss']
})
export class DailyProgressComponent {
    dailyProgressPercentage = 0;
    weeklyProgressPercentage = 0;

    constructor(
        private dailyProgressService: DailyProgressService
    ) {
        const today = dailyProgressService.getToday();
        this.dailyProgressPercentage = dailyProgressService.calcDailyProgress(today);
        this.weeklyProgressPercentage = dailyProgressService.calcWeeklyProgress(today);
    }
}