import { Component } from '@angular/core';
import { LS_GAME_MODE, LS_SYLLOGISM_GENERATOR } from '../../../constants/local-storage.constants';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export enum SyllogismGenerator {
    All = 'all',
    Fredo = 'fredo',
    Canyon = 'canyon'
}

export const getSyllogismGeneratorValue = () => {
    return (localStorage.getItem(LS_SYLLOGISM_GENERATOR) || SyllogismGenerator.Canyon) as SyllogismGenerator;
}

@Component({
    selector: 'app-game-mode-choose',
    templateUrl: './game-mode-choose.component.html',
    styleUrls: ['./game-mode-choose.component.css']
})
export class GameModeChooseComponent {
    syllogismGeneratorChoices = [
        { text: "All (random mix)", value: SyllogismGenerator.All },
        { text: "Fredo generator", value: SyllogismGenerator.Fredo },
        { text: "Canyon generator", value: SyllogismGenerator.Canyon }
    ];
    syllogismGenerator = new FormControl(getSyllogismGeneratorValue(), { nonNullable: true });

    subscriptions: Subscription[] = [];
    
    constructor() { }

    ngAfterViewInit() {
        const gameMode = localStorage.getItem(LS_GAME_MODE) || '0';
        (document.querySelector(`#mode-choice-${gameMode}`) as HTMLInputElement).checked = true;

        const syllogismGeneratorSubscription = this.syllogismGenerator.valueChanges.subscribe(value => {
            localStorage.setItem(LS_SYLLOGISM_GENERATOR, value);
        });
        this.subscriptions.push(syllogismGeneratorSubscription);
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    async setMode(gameMode: string) {
        localStorage.setItem(LS_GAME_MODE, gameMode);
    }
}
