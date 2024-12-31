import { Component } from '@angular/core';
import { SyllogimousService } from '../../services/syllogimous.service';
import { Question } from '../../models/question.models';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/syllogimous.constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent {
    EnumScreens = EnumScreens;
    allQuestions: Question[] = [];
    questions: Question[] = [];
    sliceIdx = -25;
    
    constructor(
        public sylSrv: SyllogimousService,
        public router: Router,
        private toaster: ToastService
    ) { }

    ngOnInit() {
        this.allQuestions = this.sylSrv.questionsFromLS;
        this.loadMoreQuestions();
    }

    loadMoreQuestions() {
        this.sliceIdx += 25;
        this.questions.push(...this.allQuestions.slice(this.sliceIdx, this.sliceIdx+25));
    }

    copyQuestion(q: Question) {
        const el = document.createElement("TEXTAREA") as HTMLTextAreaElement;
        document.body.appendChild(el);
        el.value = JSON.stringify(q, null, 2);
        el.focus();
        el.select();
        document.execCommand("copy");
        this.toaster.show("Question raw JSON data copied into your clipboard!", { classname: "bg-success text-light" });
        document.body.removeChild(el);
    }
}
