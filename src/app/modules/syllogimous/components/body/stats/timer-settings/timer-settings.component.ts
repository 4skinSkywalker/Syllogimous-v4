import { Component } from '@angular/core';
import { SyllogimousService } from 'src/app/modules/syllogimous/services/syllogimous.service';

@Component({
    selector: 'app-timer-settings',
    templateUrl: './timer-settings.component.html',
    styleUrls: ['./timer-settings.component.css'],
})
export class TimerSettingsComponent {
    constructor(public sylSrv: SyllogimousService) {}

    updateMultiplier(value: string) {
        const numValue = parseFloat(value);
        if (!isNaN(numValue) && numValue >= 1 && numValue <= 3) {
            this.sylSrv.timerMultiplier = numValue;
        }
    }
}
