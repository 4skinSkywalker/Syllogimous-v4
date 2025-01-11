import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/syllogimous.constants';
import { FormControl } from '@angular/forms';
import { DEFAULT_DAILY_GOAL, DEFAULT_LEVEL_DOWN_THRESHOLD, DEFAULT_LEVEL_UP_THRESHOLD, DEFAULT_TRAINING_UNIT_LENGTH, DEFAULT_WEEKLY_GOAL } from '../../services/daily-progress.service';
import { LS_DAILY_GOAL, LS_WEEKLY_GOAL } from '../../constants/local-storage.constants';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
    EnumScreens = EnumScreens;

    trainingUnitLength = new FormControl(DEFAULT_TRAINING_UNIT_LENGTH);
    levelUpThreshold = new FormControl(DEFAULT_LEVEL_UP_THRESHOLD);
    levelDownThreshold = new FormControl(DEFAULT_LEVEL_DOWN_THRESHOLD);
    dailyProgressMinutes = new FormControl(DEFAULT_DAILY_GOAL);
    weeklyProgressMinutes = new FormControl(DEFAULT_WEEKLY_GOAL);

    constructor(public router: Router) {
        const dailyLS = localStorage.getItem(LS_DAILY_GOAL);
        this.dailyProgressMinutes.setValue(Number(dailyLS) || DEFAULT_DAILY_GOAL);
        this.dailyProgressMinutes.valueChanges
            .subscribe(v => localStorage.setItem(LS_DAILY_GOAL, String(v)));

        const weeklyLS = localStorage.getItem(LS_WEEKLY_GOAL);
        this.weeklyProgressMinutes.setValue(Number(weeklyLS) || DEFAULT_WEEKLY_GOAL);
        this.weeklyProgressMinutes.valueChanges
            .subscribe(v => localStorage.setItem(LS_WEEKLY_GOAL, String(v)));
    }

}
