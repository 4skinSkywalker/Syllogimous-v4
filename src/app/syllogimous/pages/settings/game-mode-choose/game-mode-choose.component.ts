import { Component, Input } from '@angular/core';
import { LS_GAME_MODE } from '../../../constants/local-storage.constants';

@Component({
    selector: 'app-game-mode-choose',
    templateUrl: './game-mode-choose.component.html',
    styleUrls: ['./game-mode-choose.component.css']
})
export class GameModeChooseComponent {
    
    constructor() { }

    ngAfterViewInit() {
        const gameMode = localStorage.getItem(LS_GAME_MODE) || '0';
        (document.querySelector(`#mode-choice-${gameMode}`) as HTMLInputElement).checked = true;
    }

    async setMode(gameMode: string) {
        localStorage.setItem(LS_GAME_MODE, gameMode);
    }
}
