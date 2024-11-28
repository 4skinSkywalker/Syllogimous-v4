import { Directive, ElementRef, Input } from '@angular/core';
import hljs from 'highlight.js';

@Directive({
    selector: '[hl]'
})
export class HighlightDirective {
    @Input("hl")
    set hl(code: string) {
        const el = this.el.nativeElement;
        el.innerHTML = hljs.highlightAuto(code).value;
        el.style.position = "relative";
        el.style.paddingLeft = "2.5rem";
        el.style.lineHeight = "1rem";
        el.style.overflow = "hidden";
        
        for (let i = 0; i < 250; i++) {
            const ln = document.createElement("DIV");
            ln.innerHTML = String(i + 1);
            ln.style.position = "absolute";
            ln.style.top = String((i + 1) + "rem")
            ln.style.left = "0";
            ln.style.borderRight = "1px solid"
            ln.style.width = "2rem";
            ln.style.height = "1rem";
            ln.style.textAlign = "center";
            el.appendChild(ln);
        }
    }

    constructor(
        private el: ElementRef
    ) {}
}
