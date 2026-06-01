import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { StatsService } from '../../services/stats.service';
import { LS_GAME_MODE, LS_TIMER } from '../../constants/local-storage.constants';
import { LS_CUSTOM_TIMERS_KEY } from '../settings/modal-timer-settings/modal-timer-settings.component';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/game.constants';
import { GameTimerService } from '../../services/game-timer.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    Array = Array;
    
    timerType;
    gameMode;
    timerTimeSeconds = 0;
    trueButtonToTheRight = false;

    constructor(
        public game: GameService,
        public gameTimerService: GameTimerService,
        private statsService: StatsService,
        private router: Router,
    ) {
        this.timerType = localStorage.getItem(LS_TIMER) || '0';
        this.gameMode = localStorage.getItem(LS_GAME_MODE) || '0';
        this.trueButtonToTheRight = Math.random() > 0.5;

        if (this.game.question.conclusion === "!") {
            this.router.navigate([EnumScreens.Start]);
        }
    }

    ngOnInit() {
        switch(this.timerType) {
            case '1': {
                console.log("Custom timer");

                const customTimers = JSON.parse(localStorage.getItem(LS_CUSTOM_TIMERS_KEY) || "{}");
                this.timerTimeSeconds = customTimers[this.game.question.type] || 90;
                this.kickTimer();
                
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
                this.timerTimeSeconds = 90;

                const questionType = this.game.question.type;
                const questionPremises = this.game.question.premises.length;
                const { typeBasedStats } = this.statsService.calcStats(this.timerType);
                const tbs = typeBasedStats[questionType];

                if (tbs?.stats) {
                    const prevStats = (tbs.stats as any)[questionPremises - 1];
                    const currStats = (tbs.stats as any)[questionPremises];

                    let avgTimeToRespond = this.timerTimeSeconds;
                    if (currStats && currStats.count > 2) {
                        avgTimeToRespond = (currStats.last10Sum / 1000) / (currStats.last10Count || 1);
                        avgTimeToRespond -= correctRate * currStats.last10Correct;
                        avgTimeToRespond += incorrectRate * currStats.last10Incorrect;
                        avgTimeToRespond += timeoutRate * currStats.last10Timeout;
                    } else if (prevStats && prevStats.count > 2) {
                        avgTimeToRespond = (prevStats.last10Sum / 1000) / (prevStats.last10Count || 1);
                        avgTimeToRespond -= correctRate * prevStats.last10Correct;
                        avgTimeToRespond += incorrectRate * prevStats.last10Incorrect;
                        avgTimeToRespond += timeoutRate * prevStats.last10Timeout;
                        avgTimeToRespond += newLevelBonus; // Bonus for the new level
                    }

                    avgTimeToRespond += negationBonus * this.game.question.negations;
                    avgTimeToRespond += metaRelationBonus * this.game.question.metaRelations;

                    this.timerTimeSeconds = Math.floor(Math.max(0, avgTimeToRespond));
                }

                this.kickTimer();
                
                break;
            }
            default: {
                console.log("No timer");
            }
        }
    }

    ngOnDestroy() {
        this.gameTimerService.stop();
    }

    kickTimer = async () => {
        await this.gameTimerService.start(this.timerTimeSeconds);
        this.game.checkQuestion();
    }
}
