import { Component } from '@angular/core';
import { EnumTiers, TIER_SCORE_RANGES } from 'src/app/syllogimous/constants/game.constants';
import { GameService } from 'src/app/syllogimous/services/game.service';

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
        public game: GameService
    ) {}

    ngOnInit() {
        const currTierIdx = this.tiers.findIndex(tier => tier === this.game.tier);
        this.nextTier = this.tiers[currTierIdx + 1] || "--";
        this.pointsRemaining = this.nextTier ? (TIER_SCORE_RANGES[this.nextTier].minScore - this.game.score) : 0;
    }
}
