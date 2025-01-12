import { Component } from '@angular/core';
import { Question } from '../../models/question.models';
import { SyllogimousService } from '../../services/syllogimous.service';
import { LS_HISTORY } from '../../constants/local-storage.constants';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/syllogimous.constants';
import { EnumQuestionType } from '../../constants/question.constants';

@Component({
    selector: 'app-tutorials',
    templateUrl: './tutorials.component.html',
    styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent {
    EnumScreens = EnumScreens;
    EnumQuestionType = EnumQuestionType;

    questionTypes: EnumQuestionType[] = [];
    questions: Question[] = [];
    seenQs: Record<string, boolean> = {};

    constructor(
        public sylSrv: SyllogimousService,
        public router: Router
    ) {
        this.questionTypes = Object.values(EnumQuestionType);
    }

    ngOnInit() {
        const history = localStorage.getItem(LS_HISTORY);
        if (history) {
            this.questions = JSON.parse(history).reverse();
            this.seenQs = this.questions.reduce((acc, curr) => (acc[curr.type] = true, acc), {} as any);
        }
    }

    navTo(type: EnumQuestionType) {
        this.router.navigate([EnumScreens.Tutorial, type], { state: { data: { showBack: true } } });
    }
}
