import { Component } from '@angular/core';
import { SyllogimousService } from '../../services/syllogimous.service';
import { StatsService } from '../../services/stats.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
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
        this.timerFull = upperBound;

        this.statsService.calcStats();
        const questionType = this.sylSrv.question.type;
        const questionPremises = this.sylSrv.question.premises.length;
        const typeBasedStats = this.statsService.typeBasedStats[questionType];
        if (typeBasedStats?.stats) {
            const prevStats = typeBasedStats.stats[questionPremises - 1];
            const currStats = typeBasedStats.stats[questionPremises];
            let avg = 0;
            if (currStats && currStats.count > 4) {
                avg = currStats.sum / (1000 * currStats.count);
            } else if (prevStats && prevStats.count > 4) {
                avg = prevStats.sum / (1000 * prevStats.count) + (4 * bufferTime);
            }
            this.timerFull = Math.max(lowerBound, Math.min(avg, upperBound)) + bufferTime;
            console.warn("timerFull", this.timerFull);
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
