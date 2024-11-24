import { Component } from '@angular/core';
import { SyllogimousService } from '../../services/syllogimous.service';

@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {
    constructor(
        public sylSrv: SyllogimousService
    ) { }
}
