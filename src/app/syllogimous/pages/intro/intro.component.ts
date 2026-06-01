import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent {
    constructor(
        public game: GameService
    ) { }
}
