import { Component } from "@angular/core";
import { SyllogimousService } from "../../../syllogimous.service";
import { EnumScreens } from "../../../models/syllogimous.models";

@Component({
    selector: "app-footer-tutorials",
    templateUrl: "./tutorials.component.html",
    styleUrls: ["./tutorials.component.css"]
})
export class FooterTutorialsComponent {
    EnumScreens = EnumScreens;

    constructor(
        public sylSrv: SyllogimousService
    ) {}

    ngOnInit() {}
}