import { Component, OnDestroy, OnInit } from '@angular/core';
import { SyllogimousService } from '../../../services/syllogimous.service';
import { StatsService } from '../../../services/stats.service';

@Component({
    selector: 'app-body-in-game',
    templateUrl: './in-game.component.html',
    styleUrls: ['./in-game.component.css'],
})
export class BodyInGameComponent implements OnInit, OnDestroy {
    timerFull = 0;
    timerLeft = 0;
    timer: any;

    constructor(
        public sylSrv: SyllogimousService,
        private statsService: StatsService,
    ) {}

    ngOnInit() {
        const lowerBound = 10;
        const bufferTime = 5;
        const initialTime = 45;
        this.timerFull = initialTime;

        this.statsService.calcStats();
        const questionType = this.sylSrv.question.type;
        const questionPremises = this.sylSrv.question.premises.length;
        const typeBasedStats = this.statsService.typeBasedStats[questionType];

        if (typeBasedStats?.stats) {
            const prevStats = typeBasedStats.stats[questionPremises - 1];
            const currStats = typeBasedStats.stats[questionPremises];
            let avg = 0;

            if (currStats && currStats.count > 4) {
                avg =
                    (currStats.sum / (1000 * currStats.count)) *
                    this.sylSrv.timerMultiplier;
            } else if (prevStats && prevStats.count > 4) {
                avg =
                    (prevStats.sum / (1000 * prevStats.count)) *
                    this.sylSrv.timerMultiplier;
                avg += 4 * bufferTime;
            } else {
                avg = initialTime * this.sylSrv.timerMultiplier;
            }

            this.timerFull = Math.max(lowerBound, avg) + bufferTime;
        }

        this.timerLeft = this.timerFull;
        this.timer = setInterval(() => {
            this.timerLeft -= 1;
            if (this.timerLeft < 0) {
                this.sylSrv.checkQuestion();
            }
        }, 1000);
    }

    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}
