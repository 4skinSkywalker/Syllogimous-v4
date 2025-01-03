import { Component } from '@angular/core';
import { EnumQuestionType } from 'src/app/syllogimous/constants/question.constants';
import { TypeBasedStats } from 'src/app/syllogimous/models/stats.models';
import { StatsService } from 'src/app/syllogimous/services/stats.service';
import { SyllogimousService } from 'src/app/syllogimous/services/syllogimous.service';

@Component({
    selector: 'app-type-based-stats',
    templateUrl: './type-based-stats.component.html',
    styleUrls: ['./type-based-stats.component.css']
})
export class TypeBasedStatsComponent {
    EnumQuestionType = EnumQuestionType;
    types: EnumQuestionType[];
    typeBasedStats: TypeBasedStats;

    constructor(
        public sylSrv: SyllogimousService,
        private statsService: StatsService,
    ) {
        const { types, typeBasedStats } = this.statsService.calcStats();
        this.types = types;
        this.typeBasedStats = typeBasedStats;
    }
}
