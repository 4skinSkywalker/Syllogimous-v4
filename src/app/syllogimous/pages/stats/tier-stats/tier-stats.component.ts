import { Component } from '@angular/core';
import { EnumTiers, TIER_SCORE_RANGES } from 'src/app/syllogimous/constants/syllogimous.constants';
import { SyllogimousService } from 'src/app/syllogimous/services/syllogimous.service';

@Component({
    selector: 'app-tier-stats',
    templateUrl: './tier-stats.component.html',
    styleUrls: ['./tier-stats.component.css']
})
export class TierStatsComponent {
    TIER_SCORE_RANGES = TIER_SCORE_RANGES;
    tiers = Object.values(EnumTiers);
    nextTier = EnumTiers.Savant;
    pointsRemaining = 0;

    constructor(
        public sylSrv: SyllogimousService
    ) {}

    ngOnInit() {
        const currTierIdx = this.tiers.findIndex(tier => tier === this.sylSrv.tier);
        this.nextTier = this.tiers[currTierIdx + 1] || "--";
        this.pointsRemaining = this.nextTier ? (TIER_SCORE_RANGES[this.nextTier].minScore - this.sylSrv.score) : 0;
    }
}
