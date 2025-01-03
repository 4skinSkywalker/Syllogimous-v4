import { Component } from "@angular/core";
import { EnumTiers, TIER_COLORS, TIER_SCORE_RANGES } from "../../constants/syllogimous.constants";
import { SyllogimousService } from "../../services/syllogimous.service";

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
        public sylSrv: SyllogimousService,
    ) {}
}