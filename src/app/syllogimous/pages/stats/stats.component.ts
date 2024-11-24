import { Component } from '@angular/core';
import { EnumScreens } from '../../models/syllogimous.models';
import { Router } from '@angular/router';
import { StatsExportService } from '../../services/stats-export.service';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent {
    EnumScreens = EnumScreens;

    constructor(
        public router: Router,
        private statsExportService: StatsExportService
    ) {}

    exportStats() {
        this.statsExportService.exportStats();
    }
}