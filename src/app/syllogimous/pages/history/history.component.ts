import { Component } from '@angular/core';
import { SyllogimousService } from '../../services/syllogimous.service';
import { Question } from '../../models/question.models';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/syllogimous.constants';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent {
    EnumScreens = EnumScreens;
    questions: Question[] = [];
    
    constructor(
        public sylSrv: SyllogimousService,
        public router: Router
    ) { }

    ngOnInit() {
        this.questions = this.sylSrv.questionsFromLS;
    }
}
