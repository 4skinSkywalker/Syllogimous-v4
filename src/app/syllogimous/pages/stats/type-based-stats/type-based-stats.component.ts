import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { EnumQuestionType } from 'src/app/syllogimous/models/question.models';
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

    getTabInfoForType(type: EnumQuestionType) {
        if (type === EnumQuestionType.LinearArrangement || type === EnumQuestionType.CircularArrangement) {
            return {
                initial: '3',
                premises: ['3','4','5','6+'],
            };
        } else {
            return {
                initial: '2',
                premises: ['2','3','4','5','6+'],
            };
        }
    }
}
