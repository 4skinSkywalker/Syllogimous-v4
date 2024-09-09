import { Component, OnDestroy, OnInit } from "@angular/core";
import { SyllogimousService } from "../../../services/syllogimous.service";
import { EnumTiers } from "../../../models/syllogimous.models";
import { StatsService } from "../../../services/stats.service";

@Component({
    selector: "app-body-in-game",
    templateUrl: "./in-game.component.html",
    styleUrls: ["./in-game.component.css"]
})
export class BodyInGameComponent implements OnInit, OnDestroy {
    timerFull = 0;
    timerLeft = 0;
    timer: any;

    constructor(
        public sylSrv: SyllogimousService,
        private statsService: StatsService,
    ) { }

    ngOnInit() {
        const upperBound = 90;
        const lowerBound = 10;
        const bufferTime = 5;
        this.timerFull = 90;

        this.statsService.calcStats();
        const questionType = this.sylSrv.question.type;
        const questionPremises = this.sylSrv.question.premises.length;
        const typeBasedStats = this.statsService.typeBasedStats[questionType];
        if (typeBasedStats?.stats) {
            const stats = typeBasedStats.stats[questionPremises];
            if (stats && stats.count > 4) {
                const avg = stats.sum / (1000 * stats.count);
                this.timerFull = Math.max(lowerBound, Math.min(avg, upperBound)) + bufferTime;
                console.warn("AVG for " + questionType + " and " + questionPremises + " premises is " + this.timerFull + " s")
            }
        }
        
        this.timerLeft = this.timerFull;
        this.timer = setInterval(() => {
            this.timerLeft -= 1;
            if (this.timerLeft < 0) {
                this.sylSrv.checkQuestion();
            }
        }, 1000);
        console.log("start timer", this.timer, "with time", this.timerFull);
    }

    ngOnDestroy() {
        if (this.timer) {
            console.log("end timer", this.timer, "with time", this.timerLeft);
            clearInterval(this.timer);
        }
    }
}