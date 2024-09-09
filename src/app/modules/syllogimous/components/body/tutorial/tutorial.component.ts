import { Component } from "@angular/core";
import { SyllogimousService } from "../../../services/syllogimous.service";
import { EnumQuestionType } from "../../../models/question.models";

@Component({
    selector: "app-body-tutorial",
    templateUrl: "./tutorial.component.html",
    styleUrls: ["./tutorial.component.css"]
})
export class BodyTutorialComponent {
    EnumQuestionType = EnumQuestionType;

    constructor(
        public sylSrv: SyllogimousService
    ) {}
}