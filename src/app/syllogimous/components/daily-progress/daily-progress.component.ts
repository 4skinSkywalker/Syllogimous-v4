import { Component, Input } from '@angular/core';
import { DailyProgressService } from '../../services/daily-progress.service';

@Component({
    selector: 'app-daily-progress',
    templateUrl: './daily-progress.component.html',
    styleUrls: ['./daily-progress.component.css']
})
export class DailyProgressComponent {

    @Input("showTimePlayedToday") showTimePlayedToday = false;

    dailyProgressPercentage = 0;

    constructor(
        private dailyProgressService: DailyProgressService
    ) {
        this.dailyProgressPercentage = dailyProgressService.calcDailyProgress(dailyProgressService.getToday());
    }
}
