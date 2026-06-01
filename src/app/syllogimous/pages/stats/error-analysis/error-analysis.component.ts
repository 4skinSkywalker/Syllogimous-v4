import { Component } from '@angular/core';
import { Question } from 'src/app/syllogimous/models/question.models';
import { GameService } from 'src/app/syllogimous/services/game.service';

@Component({
    selector: 'app-error-analysis',
    templateUrl: './error-analysis.component.html',
    styleUrls: ['./error-analysis.component.css']
})
export class ErrorAnalysisComponent {
    questions: Question[] = [];
    mostCommonMistake = "No Mistakes Yet";
    leastCommonMistake = "No Mistakes Yet";

    constructor(
        public game: GameService
    ) {}

    ngOnInit() {
        this.questions = this.game.questions;

        const typeMistakesCount: Record<string, number> = {};
        this.questions
            .filter(q => q.isValid !== q.userAnswer)
            .forEach(q => {
                typeMistakesCount[q.type] = typeMistakesCount[q.type] || 0;
                typeMistakesCount[q.type]++;
            });
        const sorted = Object.entries(typeMistakesCount).sort((a, b) => a[1] - b[1]);
        if (sorted.length) {
            this.mostCommonMistake = sorted[sorted.length - 1][0];
            this.leastCommonMistake = sorted[0][0];
        }
    }
}
