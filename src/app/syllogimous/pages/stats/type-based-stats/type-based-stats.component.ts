import { Component } from '@angular/core';
import { StatsService } from 'src/app/syllogimous/services/stats.service';
import { SyllogimousService } from 'src/app/syllogimous/services/syllogimous.service';

@Component({
    selector: 'app-type-based-stats',
    templateUrl: './type-based-stats.component.html',
    styleUrls: ['./type-based-stats.component.css']
})
export class TypeBasedStatsComponent {

    constructor(
        public sylSrv: SyllogimousService,
        public statsService: StatsService,
    ) { }

    ngOnInit() {
        this.statsService.calcStats();
    }
}
