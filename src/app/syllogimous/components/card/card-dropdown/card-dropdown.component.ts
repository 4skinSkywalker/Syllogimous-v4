import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LS_DONT_SHOW, LS_HISTORY, LS_SCORE } from 'src/app/syllogimous/constants/local-storage.constants';
import { EnumQuestionType } from 'src/app/syllogimous/models/question.models';
import { EnumScreens } from 'src/app/syllogimous/models/syllogimous.models';
import { SyllogimousService } from 'src/app/syllogimous/services/syllogimous.service';

@Component({
    selector: 'app-card-dropdown',
    templateUrl: './card-dropdown.component.html',
    styleUrls: ['./card-dropdown.component.scss']
})
export class CardDropdownComponent {
    EnumScreens = EnumScreens;

    constructor(
        public sylSrv: SyllogimousService,
        public router: Router,
        private modalService: NgbModal,
    ) {}

    ngAfterViewInit() {
        this.toggleDarkmode(true);
    }

    async resetGame(content: any) {
        await this.modalService.open(content, { centered: true }).result;

        localStorage.removeItem(LS_SCORE);
        localStorage.removeItem(LS_HISTORY);

        for (const screen of Object.values(EnumScreens)) {
            localStorage.removeItem(LS_DONT_SHOW + screen);
        }

        for (const type of Object.values(EnumQuestionType)) {
            localStorage.removeItem(LS_DONT_SHOW + type);
        }

        location.reload();
    }

    toggleDarkmode(initial = false) {
        if (!initial) {
            localStorage.setItem("darkmode", JSON.stringify(!this.getDarkmode()));
        }
        if (this.getDarkmode()) {
            document.querySelector("html")?.setAttribute("darkmode", "");
        } else {
            document.querySelector("html")?.removeAttribute("darkmode");
        }
    }

    getDarkmode() {
        return JSON.parse(localStorage.getItem("darkmode") || "false");
    }
}
