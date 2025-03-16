import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LS_DAILY_GOAL, LS_DAILY_PROGRESS, LS_DONT_SHOW, LS_GAME_MODE, LS_HISTORY, LS_PG_SETTINGS, LS_PREMISES_DOWN_THRESHOLD, LS_PREMISES_UP_THRESHOLD, LS_SCORE, LS_TIMER, LS_TRAINING_UNIT, LS_TRAINING_UNIT_LENGTH, LS_WEEKLY_GOAL } from 'src/app/syllogimous/constants/local-storage.constants';
import { EnumQuestionType } from 'src/app/syllogimous/constants/question.constants';
import { EnumScreens } from 'src/app/syllogimous/constants/syllogimous.constants';
import { SyllogimousService } from 'src/app/syllogimous/services/syllogimous.service';
import { DataTransferService } from 'src/app/syllogimous/services/data-transfer.service';
import { ImportConfirmationModalComponent } from '../../import-confirmation-modal/import-confirmation-modal.component';

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
        private dataTransferService: DataTransferService
    ) {}

    ngAfterViewInit() {
        this.toggleDarkmode(true);
    }

    async resetGame(content: any) {
        await this.modalService.open(content, { centered: true }).result;
        
        localStorage.removeItem(LS_HISTORY);
        localStorage.removeItem(LS_TIMER);
        localStorage.removeItem(LS_GAME_MODE);
        localStorage.removeItem(LS_DAILY_PROGRESS);
        localStorage.removeItem(LS_PG_SETTINGS);
        localStorage.removeItem(LS_DAILY_GOAL);
        localStorage.removeItem(LS_WEEKLY_GOAL);
        localStorage.removeItem(LS_TRAINING_UNIT_LENGTH);
        localStorage.removeItem(LS_PREMISES_UP_THRESHOLD);
        localStorage.removeItem(LS_PREMISES_DOWN_THRESHOLD);
        localStorage.removeItem(LS_SCORE);

        for (const screen of Object.values(EnumScreens)) {
            localStorage.removeItem(LS_DONT_SHOW + screen);
        }

        for (const type of Object.values(EnumQuestionType)) {
            localStorage.removeItem(LS_DONT_SHOW + type);
            localStorage.removeItem(LS_TRAINING_UNIT + type);
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

    exportGameData() {
        this.dataTransferService.exportData();
    }

    importGameData() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.json';
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);
        
        fileInput.onchange = (event: any) => {
            const file = event.target.files[0];
            if (file) {
                this.confirmImport(file);
            }
            document.body.removeChild(fileInput);
        };
        
        fileInput.click();
    }

    async confirmImport(file: File) {
        const modalRef = this.modalService.open(ImportConfirmationModalComponent, { 
            centered: true,
            backdrop: 'static'
        });
        
        modalRef.componentInstance.fileInfo = file;
        
        try {
            await modalRef.result;
            this.dataTransferService.importData(file);
        } catch (error) {
            // User canceled import
        }
    }
}
