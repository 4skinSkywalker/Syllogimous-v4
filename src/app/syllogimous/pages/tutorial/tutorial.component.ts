import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/game.constants';

@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {
    EnumScreens = EnumScreens;

    showBack = false;

    constructor(
        public game: GameService,
        public router: Router
    ) {
        const navigation = this.router.getCurrentNavigation();
        this.showBack = navigation?.extras.state?.data?.showBack;
        console.log("Show back", this.showBack);
    }

}
