import { Component, Input } from '@angular/core';
import { DailyProgressService } from '../../services/daily-progress.service';

@Component({
    selector: 'app-daily-progress',
    templateUrl: './daily-progress.component.html',
    styleUrls: ['./daily-progress.component.css']
})
export class DailyProgressComponent {
    @Input("showTimePlayedToday") showTimePlayedToday = false;
    @Input("showWeeklyProgress") showWeeklyProgress = false;

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