import { Component } from "@angular/core";
import { EnumTiers, TIER_COLORS, TIER_SCORE_RANGES } from "../../constants/game.constants";
import { GameService } from "../../services/game.service";

@Component({
    selector: "app-card",
    styleUrls: ["./card.component.scss"],
    templateUrl: "./card.component.html"
})
export class CardComponent {
    TIER_COLORS = TIER_COLORS;
    TIER_SCORE_RANGES = TIER_SCORE_RANGES;
    tiers = Object.values(EnumTiers);
    Infinity = Infinity;

    constructor(
        public game: GameService,
    ) {}
}