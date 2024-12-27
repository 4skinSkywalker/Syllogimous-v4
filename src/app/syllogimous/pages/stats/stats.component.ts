import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatsExportService } from '../../services/stats-export.service';
import { EnumScreens } from '../../constants/syllogimous.constants';

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