import { Component } from '@angular/core';
import { SyllogimousService } from '../../services/syllogimous.service';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/syllogimous.constants';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
    EnumScreens = EnumScreens;

    constructor(
        public sylSrv: SyllogimousService,
        public router: Router
    ) { }
}
