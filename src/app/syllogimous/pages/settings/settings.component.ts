import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/syllogimous.constants';
import { FormControl } from '@angular/forms';
import { DEFAULT_DAILY_GOAL, DEFAULT_PREMISES_DOWN_THRESHOLD, DEFAULT_PREMISES_UP_THRESHOLD, DEFAULT_TRAINING_UNIT_LENGTH, DEFAULT_WEEKLY_GOAL, ProgressAndPerformanceService } from '../../services/progress-and-performance.service';
import { LS_DAILY_GOAL, LS_PREMISES_DOWN_THRESHOLD, LS_PREMISES_UP_THRESHOLD, LS_TRAINING_UNIT_LENGTH, LS_WEEKLY_GOAL } from '../../constants/local-storage.constants';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
    Math = Math;
    EnumScreens = EnumScreens;

    dailyProgressMinutes = new FormControl(DEFAULT_DAILY_GOAL);
    weeklyProgressMinutes = new FormControl(DEFAULT_WEEKLY_GOAL);

    trainingUnitLength = new FormControl(DEFAULT_TRAINING_UNIT_LENGTH);
    premisesUpThreshold = new FormControl(DEFAULT_PREMISES_UP_THRESHOLD);
    premisesDownThreshold = new FormControl(DEFAULT_PREMISES_DOWN_THRESHOLD);

    constructor(
        public router: Router,
        private progressAndPerformanceService: ProgressAndPerformanceService
    ) {
        // Playtime stuff     
        const daily = localStorage.getItem(LS_DAILY_GOAL);
        this.dailyProgressMinutes.setValue(Number(daily) || DEFAULT_DAILY_GOAL);
        this.dailyProgressMinutes.valueChanges
            .subscribe(v => localStorage.setItem(LS_DAILY_GOAL, String(v)));

        const weekly = localStorage.getItem(LS_WEEKLY_GOAL);
        this.weeklyProgressMinutes.setValue(Number(weekly) || DEFAULT_WEEKLY_GOAL);
        this.weeklyProgressMinutes.valueChanges
            .subscribe(v => localStorage.setItem(LS_WEEKLY_GOAL, String(v)));

        // Training unit stuff
        const { trainingUnitLength, premisesUpThreshold, premisesDownThreshold } = this.progressAndPerformanceService.getTrainingUnitSettings();
        
        this.trainingUnitLength.setValue(trainingUnitLength);
        this.trainingUnitLength.valueChanges
            .subscribe(v => localStorage.setItem(LS_TRAINING_UNIT_LENGTH, String(v)));

        this.premisesUpThreshold.setValue(premisesUpThreshold);
        this.premisesUpThreshold.valueChanges
            .subscribe(v => localStorage.setItem(LS_PREMISES_UP_THRESHOLD, String(v)));

        this.premisesDownThreshold.setValue(premisesDownThreshold);
        this.premisesDownThreshold.valueChanges
            .subscribe(v => localStorage.setItem(LS_PREMISES_DOWN_THRESHOLD, String(v)));
    }

}
