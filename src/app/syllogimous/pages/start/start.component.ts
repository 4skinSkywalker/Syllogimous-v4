import { Component } from '@angular/core';
import { EnumScreens, EnumTiers } from '../../models/syllogimous.models';
import { TIER_SCORE_RANGES } from '../../constants/syllogimous.constants';
import { Question } from '../../models/question.models';
import { SyllogimousService } from '../../services/syllogimous.service';
import { Router } from '@angular/router';
import { formatTime } from 'src/app/utils/date';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent {
    EnumScreens = EnumScreens;
    formatTime = formatTime;  // Explicitly declare as class property

    TIER_SCORE_RANGES = TIER_SCORE_RANGES;
    tiers = Object.values(EnumTiers);
    nextTier: EnumTiers | string = EnumTiers.Savant;
    pointsRemaining = 0;

    questions: Question[] = [];
    correctQs: Question[] = [];
    incorrectQs: Question[] = [];
    unansweredQs: Question[] = [];
    currentStreak: Question[] = [];
    longestStreak: Question[] = [];
    timePlayedToday: number = 0;  // Explicitly declare as class property

    constructor(
        public sylSrv: SyllogimousService,
        public router: Router,
    ) { }

    ngOnInit() {
        const currTierIdx = this.tiers.findIndex(tier => tier === this.sylSrv.tier);
        this.nextTier = this.tiers[currTierIdx + 1] || "--";
        this.pointsRemaining = this.nextTier ? (TIER_SCORE_RANGES[this.nextTier].minScore - this.sylSrv.score) : 0;

        this.questions = this.sylSrv.questionsFromLS;

        this.correctQs = this.questions.filter(q => q.userAnswer !== undefined && q.isValid === q.userAnswer);
        this.incorrectQs = this.questions.filter(q => q.userAnswer !== undefined && q.isValid !== q.userAnswer);
        this.unansweredQs = this.questions.filter(q => q.userAnswer === undefined);

        for (const q of this.questions) {
            if (q.isValid !== q.userAnswer) {
                break;
            }
            this.currentStreak.push(q);
        }

        let streak = [];
        for (const q of this.questions) {
            if (q.isValid !== q.userAnswer) {
                if (streak.length > this.longestStreak.length) {
                    this.longestStreak = streak;
                    streak = [];
                }
                continue;
            }
            streak.push(q);
        }

        // Calculate time played today
        const today = new Date().setHours(0, 0, 0, 0);
        this.timePlayedToday = this.questions
            .filter(q => new Date(q.createdAt).setHours(0, 0, 0, 0) === today)
            .reduce((sum, q) => sum + (q.answeredAt - q.createdAt), 0);
    }
}