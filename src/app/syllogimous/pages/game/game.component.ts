import { Component } from '@angular/core';
import { SyllogimousService } from '../../services/syllogimous.service';
import { StatsService } from '../../services/stats.service';
import { LS_TIMER } from '../../constants/local-storage.constants';
import { EnumQuestionType } from '../../models/question.models';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    timerType = '0';
    timerFull = 0;
    timerLeft = 0;
    timer: any;

    constructor(
        public sylSrv: SyllogimousService,
        private statsService: StatsService,
    ) { }

    ngOnInit() {
        this.timerType = localStorage.getItem(LS_TIMER) || '0';

        switch(this.timerType) {
            case '1': {
                console.log("Fixed timer");

                switch(this.sylSrv.question.type) {
                    case EnumQuestionType.Syllogism: {
                        this.timerFull = this.sylSrv.settings.syllogism[2];
                        break;
                    }
                    case EnumQuestionType.Distinction: {
                        this.timerFull = this.sylSrv.settings.distinction[2];
                        break;
                    }
                    case EnumQuestionType.ComparisonNumerical: {
                        this.timerFull = this.sylSrv.settings.comparisonNumerical[2];
                        break;
                    }
                    case EnumQuestionType.ComparisonChronological: {
                        this.timerFull = this.sylSrv.settings.comparisonChronological[2];
                        break;
                    }
                    case EnumQuestionType.Binary: {
                        this.timerFull = this.sylSrv.settings.binary[2];
                        break;
                    }
                    case EnumQuestionType.Direction: {
                        this.timerFull = this.sylSrv.settings.direction[2];
                        break;
                    }
                    case EnumQuestionType.Direction3D: {
                        this.timerFull = this.sylSrv.settings.direction3D[2];
                        break;
                    }
                    case EnumQuestionType.Direction4D: {
                        this.timerFull = this.sylSrv.settings.direction4D[2];
                        break;
                    }
                    case EnumQuestionType.Analogy: {
                        this.timerFull = this.sylSrv.settings.analogy[2];
                        break;
                    }
                }
                
                this.timerLeft = this.timerFull;
                this.timer = this.kickTimer();

                break;
            }
            case '2': {
                console.log("Adaptive timer");

                const correctRate = 0.5;
                const incorrectRate = 1;
                const timeoutRate = 1.5;
                const newLevelBonus = 15;
                const negationBonus = 3;
                const metaRelationBonus = 4;
                this.timerFull = 90;

                this.statsService.calcStats();
                const questionType = this.sylSrv.question.type;
                const questionPremises = this.sylSrv.question.premises.length;
                const typeBasedStats = this.statsService.typeBasedStats[questionType];

                if (typeBasedStats?.stats) {
                    const prevStats = typeBasedStats.stats[questionPremises - 1];
                    const currStats = typeBasedStats.stats[questionPremises];

                    let avgTimeToRespond = this.timerFull;
                    if (currStats && currStats.count > 2) {
                        avgTimeToRespond = (currStats.last10Sum / 1000) / currStats.last10Count;
                        avgTimeToRespond -= correctRate * currStats.last10Correct;
                        avgTimeToRespond += incorrectRate * currStats.last10Incorrect;
                        avgTimeToRespond += timeoutRate * currStats.last10Timeout;
                    } else if (prevStats && prevStats.count > 2) {
                        avgTimeToRespond = (prevStats.last10Sum / 1000) / prevStats.last10Count;
                        avgTimeToRespond -= correctRate * prevStats.last10Correct;
                        avgTimeToRespond += incorrectRate * prevStats.last10Incorrect;
                        avgTimeToRespond += timeoutRate * prevStats.last10Timeout;
                        avgTimeToRespond += newLevelBonus; // Bonus for the new level
                    }

                    avgTimeToRespond += negationBonus * this.sylSrv.question.negations;
                    avgTimeToRespond += metaRelationBonus * this.sylSrv.question.metaRelations;

                    this.timerFull = Math.floor(Math.max(0, avgTimeToRespond));
                }

                this.timerLeft = this.timerFull;
                this.timer = this.kickTimer();
                
                break;
            }
            default: {
                console.log("No timer");
            }
        }
    }

    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    kickTimer = () => {
        return setInterval(() => {
            this.timerLeft -= 1;
            if (this.timerLeft < 0) {
                this.sylSrv.checkQuestion();
            }
        }, 1000);
    }
}
