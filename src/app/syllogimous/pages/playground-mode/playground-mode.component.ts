import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDynamicField } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { areSettingsInvalid, Settings } from 'src/app/syllogimous/models/settings.models';
import { EnumScreens } from 'src/app/syllogimous/models/syllogimous.models';
import { SyllogimousService } from 'src/app/syllogimous/services/syllogimous.service';

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

    constructor(
        public router: Router,
        private modalService: NgbModal,
        private sylSrv: SyllogimousService,
    ) {
        const settings = this.sylSrv.playgroundSettings || new Settings();
        for (const setting in settings) {
            const settingValue = (settings as any)[setting];
            
            if (typeof settingValue === 'boolean') {
                this.fields.push({
                    field: setting,
                    label: decomposeCamelCase(setting),
                    type: "checkbox",
                    value: settingValue,
                });
            }

            if (Array.isArray((settings as any)[setting])) {
                this.fields.push(
                    { 
                        filler: "<div class='border-bottom opacity-10'></div>",
                        field: "",
                        label: ""
                    },
                    {
                        field: setting,
                        label: "Enable " + decomposeCamelCase(setting),
                        type: "checkbox",
                        value: settingValue[0],
                    },
                    {
                        field: setting + "Premises",
                        label: decomposeCamelCase(setting) + " Premises",
                        type: "range",
                        value: settingValue[1],
                        min: settingValue[1],
                        max: 10,
                        step: 1
                    }
                );
            }
        }
    }

    async play(content: any) {
        const {
            enableMeaningfulWords,
            enableMeta,
            enableNegation,
            distinction,
            distinctionPremises,
            comparisonNumerical,
            comparisonNumericalPremises,
            comparisonChronological,
            comparisonChronologicalPremises,
            direction,
            directionPremises,
            syllogism,
            syllogismPremises,
            direction3DSpatial,
            direction3DSpatialPremises,
            direction3DTemporal,
            direction3DTemporalPremises,
            direction4D,
            direction4DPremises,
            analogy,
            analogyPremises,
            binary,
            binaryPremises,
            enableAnd,
            enableNand,
            enableOr,
            enableNor,
            enableXor,
            enableXnor
        } = this.formData;
        
        const settings = new Settings();
        settings.enableMeaningfulWords = enableMeaningfulWords;
        settings.enableMeta = enableMeta;
        settings.enableNegation = enableNegation;
        settings.distinction = [distinction, distinctionPremises];
        settings.comparisonNumerical = [comparisonNumerical, comparisonNumericalPremises];
        settings.comparisonChronological = [comparisonChronological, comparisonChronologicalPremises];
        settings.direction = [direction, directionPremises]; 
        settings.syllogism = [syllogism, syllogismPremises];
        settings.direction3DSpatial = [direction3DSpatial, direction3DSpatialPremises];
        settings.direction3DTemporal = [direction3DTemporal, direction3DTemporalPremises];
        settings.direction4D = [direction4D, direction4DPremises];
        settings.analogy = [analogy, analogyPremises];
        settings.binary = [binary, binaryPremises];
        settings.enableAnd = enableAnd;
        settings.enableNand = enableNand;
        settings.enableOr = enableOr;
        settings.enableNor = enableNor;
        settings.enableXor = enableXor;
        settings.enableXnor = enableXnor;
        
        // Check configuration
        this.validationError = areSettingsInvalid(settings);
        if (this.validationError) {
            await this.modalService.open(content, { centered: true }).result;
            return;
        }
        
        this.sylSrv.playgroundSettings = settings;
        console.log("playgroundSettings", settings);

        this.sylSrv.play();
    }
}
