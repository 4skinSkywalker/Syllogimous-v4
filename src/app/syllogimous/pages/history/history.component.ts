import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Question } from '../../models/question.models';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/game.constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent {
    Array = Array;
    EnumScreens = EnumScreens;

    allQuestions: Question[] = [];
    questions: Question[] = [];
    sliceIdx = -25;
    
    constructor(
        public game: GameService,
        public router: Router,
        private toaster: ToastService
    ) { }

    ngOnInit() {
        this.allQuestions = this.game.questions;
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
