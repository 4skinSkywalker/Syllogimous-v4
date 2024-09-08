import { Component, HostBinding } from "@angular/core";
import { SyllogimousService } from "./syllogimous.service";
import { EnumScreens, EnumTiers } from "./models/syllogimous.models";
import { TIER_COLORS, TIER_SCORE_RANGES } from "./constants/syllogimous.constants";

@Component({
    selector: "app-syllogimous",
    templateUrl: "./syllogimous.component.html",
    styleUrls: ["./syllogimous.component.scss"]
})
export class SyllogimousComponent {
    @HostBinding('style.backgroundImage') backgroundImage = `linear-gradient(62deg, #8EC5FC88 0%, #E0C3FC88 100%), url(assets/images/bg-${1 + Math.floor(Math.random() * 6)}.avif)`;
    
    TIER_COLORS = TIER_COLORS;
    TIER_SCORE_RANGES = TIER_SCORE_RANGES;
    EnumScreens = EnumScreens;
    tiers = Object.values(EnumTiers);
    Infinity = Infinity;

    constructor(
        public sylSrv: SyllogimousService
    ) {}
}