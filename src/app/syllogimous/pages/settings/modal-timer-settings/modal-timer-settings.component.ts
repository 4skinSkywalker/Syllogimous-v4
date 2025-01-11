import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { IDynamicField } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { EnumQuestionType } from 'src/app/syllogimous/constants/question.constants';

export const LS_CUSTOM_TIMERS_KEY = "SYL_CUSTOM_TIMERS";

@Component({
    selector: 'app-modal-timer-settings',
    templateUrl: './modal-timer-settings.component.html',
    styleUrls: ['./modal-timer-settings.component.css'],
    imports: [SharedModule],
    standalone: true
})
export class ModalTimerSettingsComponent {
    fields: IDynamicField[] = [];
    formData: any = {};

    constructor(
        public activeModal: NgbActiveModal
    ) {
        this.load();
        for (const type of Object.values(EnumQuestionType)) {
            this.fields.push({
                field: type,
                label: type,
                type: "range",
                value: this.formData[type] || 90,
                min: 15,
                max: 240,
                step: 5
            });
        }
    }

    load() {
        this.formData = JSON.parse(localStorage.getItem(LS_CUSTOM_TIMERS_KEY) || "{}")
    }

    save() {
        localStorage.setItem(LS_CUSTOM_TIMERS_KEY, JSON.stringify(this.formData));
        this.activeModal.close("Closed");
    }
}
