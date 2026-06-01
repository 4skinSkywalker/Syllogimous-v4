import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/game.constants';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
    EnumScreens = EnumScreens;

    constructor(
        public game: GameService,
        public router: Router
    ) { }
}
