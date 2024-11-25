import { Component, HostBinding } from "@angular/core";

@Component({
    selector: "app-syllogimous",
    templateUrl: "./syllogimous.component.html",
    styleUrls: ["./syllogimous.component.scss"]
})
export class SyllogimousComponent {
    @HostBinding('style.backgroundImage') backgroundImage = `linear-gradient(62deg, #8EC5FC88 0%, #E0C3FC88 100%), url(assets/images/bg-${1 + Math.floor(Math.random() * 6)}.avif)`;

    ngAfterViewInit() {
        const greatTitle = document.querySelector(".great-title") as HTMLElement;
        if (greatTitle) {
            greatTitle.style.marginBottom = "-50px";
            const t = setInterval(() => {
                if (!parseInt(greatTitle.style.marginBottom)) {
                    return clearInterval(t);
                }
                greatTitle.style.marginBottom = (parseInt(greatTitle.style.marginBottom) + 1) + "px";
            }, 10);
        }
    }
}