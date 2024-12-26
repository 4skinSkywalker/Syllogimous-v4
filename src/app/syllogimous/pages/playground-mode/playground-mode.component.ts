import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDynamicField } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { areSettingsInvalid, QuestionSetting, Settings } from 'src/app/syllogimous/models/settings.models';
import { EnumScreens } from 'src/app/syllogimous/models/syllogimous.models';
import { SyllogimousService } from 'src/app/syllogimous/services/syllogimous.service';
import { EnumQuestionType } from '../../models/question.models';

function capitalize(val: string) {
    return val[0].toUpperCase() + val.slice(1);
}

function decomposeCamelCase(val: string) {
    const splitted = val.split(/(?=[A-Z0-9])/);
    return splitted.map(x => capitalize(x)).join(" ");
}

@Component({
    selector: 'app-playground-Mode',
    templateUrl: './playground-mode.component.html',
    styleUrls: ['./playground-mode.component.css']
})
export class PlaygroundModeComponent {
    EnumScreens = EnumScreens;
    fields: IDynamicField[] = [];
    formData: any = {};
    validationError: string | null = null;

    genericEnables: [string, boolean][];
    binaryEnables: [string, boolean][];
    questionControls: [string, QuestionSetting][];

    constructor(
        public router: Router,
        private modalService: NgbModal,
        private sylSrv: SyllogimousService,
    ) {
        const settings = this.sylSrv.playgroundSettings || new Settings();

        this.genericEnables = Object.entries(settings.enable).filter(([field]) => field !== "binary") as [string, boolean][];
        this.binaryEnables = Object.entries(settings.enable.binary);
        this.questionControls = Object.entries(settings.question);

        // Create generic boolean controls
        for (const [field, value] of this.genericEnables) {
            this.fields.push({
                type: "checkbox",
                label: decomposeCamelCase(field),
                field,
                value,
            });
        }

        // Create controls for questions (enable checkbox and num of premises slider)
        for (const [qt, qs] of this.questionControls) {
            this.fields.push(
                { 
                    filler: "<div class='pt-3'></div>",
                    field: "",
                    label: ""
                },
                {
                    field: qt,
                    label: "Enable " + decomposeCamelCase(qt),
                    type: "checkbox",
                    value: qs.actual,
                },
                {
                    field: qt + "premises",
                    label: decomposeCamelCase(qt) + " Premises",
                    type: "range",
                    value: qs.actual,
                    min: qs.min,
                    max: qs.max,
                    step: 1
                }
            );
        }

        // Create binary boolean controls
        for (const [field, value] of this.binaryEnables) {
            this.fields.push({
                type: "checkbox",
                label: decomposeCamelCase(field),
                field,
                value,
            });
        }
    }

    async play(content: any) {
        const settings = new Settings();

        // Set generic boolean values
        for (const [field, value] of this.genericEnables) {
            (settings.enable as any)[field] = this.formData[field];
        }

        // Set binary boolean values
        for (const [field, value] of this.binaryEnables) {
            (settings.enable.binary as any)[field] = this.formData[field];
        }

        // Set question enables and num of premises
        for (const [qt, qs] of this.questionControls) {
            const _qt = qt as EnumQuestionType;
            settings.question[_qt].enabled = this.formData[_qt];
            settings.question[_qt].actual = this.formData[_qt + "premises"];
        }
        
        // Check configuration
        this.validationError = areSettingsInvalid(settings);
        if (this.validationError) {
            await this.modalService.open(content, { centered: true }).result;
            return;
        }
        
        this.sylSrv.playgroundSettings = settings;
        console.log("Playground settings", settings);

        this.sylSrv.play();
    }
}
