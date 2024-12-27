import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import { jsonCopy } from "src/app/utils/json";

export interface IDynamicField {
    filler?: string;
    field: string;
    label: string;
    helper?: string;
    type?: string; // "textarea" | "number" | "range" | "select" | "checkbox" | "radio"
    value?: any;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
    step?: number;
    options?: any[];
}

interface IDynamicFieldControl extends IDynamicField {
    ngControl?: FormControl;
}

@Component({
    selector: "app-dynamic-form",
    templateUrl: "./dynamic-form.component.html",
    styleUrls: ["./dynamic-form.component.css"]
})
export class DynamicFormComponent implements OnChanges, OnDestroy {
    @Input("gap") gap = "1rem";
    @Input("fields") fields: IDynamicField[] = [];
    @Input("emitInitial") emitInitial = false
    @Output("formValueChanged") formValueChanged = new EventEmitter();
    
    _fields: IDynamicFieldControl[] = [];
    destroy$ = new Subject<void>();
    form!: FormGroup;

    get formValue() {
        return { ...this.form.getRawValue() };
    }

    ngOnInit() {
        if (this.emitInitial) {
            this.formValueChanged.emit(this.form.getRawValue());
        }
    }

    ngOnChanges() {
        if (!this.fields.length) {
            return;
        }

        this._fields = jsonCopy(this.fields);
        this.destroy$.next();

        const formGroup: Record<string, FormControl> = {};
        for (const f of this._fields) {
            if ("filler" in f) {
                continue;
            }

            const formControl = new FormControl(f.value);
            f.ngControl = formControl;
            formGroup[f.field] = formControl;
        }
        
        this.form = new FormGroup(formGroup);
        this.form.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.formValueChanged.emit(this.form.getRawValue());
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
    }
}