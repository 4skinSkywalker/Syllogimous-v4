import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LS_TIMER } from '../../constants/local-storage.constants';
import { ModalTimerSettingsComponent } from '../modal-timer-settings/modal-timer-settings.component';

@Component({
    selector: 'app-timer-choose',
    templateUrl: './timer-choose.component.html',
    styleUrls: ['./timer-choose.component.css']
})
export class TimerChooseComponent {

    constructor(
        private modalService: NgbModal
    ) {}

    ngAfterViewInit() {
        const timerType = localStorage.getItem(LS_TIMER) || '0';
        (document.querySelector(`#timer-choice-${timerType}`) as HTMLInputElement).checked = true;
    }

    async setTimer(timerType: string) {
        localStorage.setItem(LS_TIMER, timerType);
        if (timerType === "1") {
            const modalRef = this.modalService.open(ModalTimerSettingsComponent, { centered: true });
            await modalRef.result;
        }
    }
}
