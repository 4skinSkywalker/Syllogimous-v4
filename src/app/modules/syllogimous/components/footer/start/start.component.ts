import { Component } from "@angular/core";
import { SyllogimousService } from "../../../services/syllogimous.service";

@Component({
    selector: "app-footer-start",
    templateUrl: "./start.component.html",
    styleUrls: ["./start.component.css"]
})
export class FooterStartComponent {

    constructor(
        public sylSrv: SyllogimousService
    ) {}

}