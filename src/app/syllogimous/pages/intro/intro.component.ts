import { Component } from '@angular/core';
import { SyllogimousService } from '../../services/syllogimous.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent {
    constructor(
        public sylSrv: SyllogimousService
    ) { }
}
