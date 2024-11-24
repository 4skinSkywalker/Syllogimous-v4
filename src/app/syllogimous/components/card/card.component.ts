import { Component } from "@angular/core";
import { TIER_COLORS, TIER_SCORE_RANGES } from "../../constants/syllogimous.constants";
import { EnumScreens, EnumTiers } from "../../models/syllogimous.models";
import { SyllogimousService } from "../../services/syllogimous.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LS_DONT_SHOW, LS_HISTORY, LS_SCORE } from "../../constants/local-storage.constants";
import { EnumQuestionType } from "../../models/question.models";
import { Router } from "@angular/router";

@Component({
    selector: "app-card",
    styleUrls: ["./card.component.css"],
    templateUrl: "./card.component.html"
})
export class CardComponent {
    TIER_COLORS = TIER_COLORS;
    TIER_SCORE_RANGES = TIER_SCORE_RANGES;
    EnumScreens = EnumScreens;
    tiers = Object.values(EnumTiers);
    Infinity = Infinity;

    constructor(
        public sylSrv: SyllogimousService,
        public router: Router,
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