import { Component } from '@angular/core';
import { SyllogimousService } from '../../services/syllogimous.service';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
    constructor(
        public sylSrv: SyllogimousService
    ) { }
}
