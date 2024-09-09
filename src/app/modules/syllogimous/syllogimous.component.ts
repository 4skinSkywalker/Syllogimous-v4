import { Component, HostBinding } from "@angular/core";
import { SyllogimousService } from "./services/syllogimous.service";
import { EnumScreens, EnumTiers } from "./models/syllogimous.models";
import { TIER_COLORS, TIER_SCORE_RANGES } from "./constants/syllogimous.constants";
import { LS_DONT_SHOW, LS_HISTORY, LS_SCORE } from "./constants/local-storage.constants";
import { EnumQuestionType } from "./models/question.models";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

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
        public sylSrv: SyllogimousService,
        private modalService: NgbModal,
    ) {}

    async resetGame(content: any) {
        await this.modalService.open(content, { centered: true }).result;

        localStorage.removeItem(LS_SCORE);
        localStorage.removeItem(LS_HISTORY);

        for (const screen of Object.values(EnumScreens)) {
            localStorage.removeItem(LS_DONT_SHOW + screen);
        }

        for (const type of Object.values(EnumQuestionType)) {
            localStorage.removeItem(LS_DONT_SHOW + type);
        }

        location.reload();
    }
}