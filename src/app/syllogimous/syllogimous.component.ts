import { Component, HostBinding } from "@angular/core";

@Component({
    selector: "app-syllogimous",
    templateUrl: "./syllogimous.component.html",
    styleUrls: ["./syllogimous.component.scss"]
})
export class SyllogimousComponent {
    @HostBinding('style.backgroundImage') backgroundImage = `linear-gradient(62deg, #8EC5FC88 0%, #E0C3FC88 100%), url(assets/images/bg-${1 + Math.floor(Math.random() * 6)}.avif)`;
}