import { Component } from '@angular/core';
import { EnumScreens } from '../../models/syllogimous.models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent {
    EnumScreens = EnumScreens;

    constructor(
        public router: Router
    ) {}
}
