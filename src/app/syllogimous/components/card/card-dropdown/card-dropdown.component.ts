import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LS_HISTORY, LS_PROPS } from 'src/app/syllogimous/constants/local-storage.constants';
import { EnumScreens } from 'src/app/syllogimous/constants/game.constants';
import { GameService } from 'src/app/syllogimous/services/game.service';
import { downloadFile } from 'src/app/utils/file';

@Component({
    selector: 'app-card-dropdown',
    templateUrl: './card-dropdown.component.html',
    styleUrls: ['./card-dropdown.component.scss']
})
export class CardDropdownComponent {
    EnumScreens = EnumScreens;

    constructor(
        public game: GameService,
        public router: Router,
        private modalService: NgbModal,
    ) { }

    ngAfterViewInit() {
        this.toggleDarkmode(true);
    }

    async resetGame(content: any) {
        await this.modalService.open(content, { centered: true }).result;

        for (const lsProp of LS_PROPS) {
            localStorage.removeItem(lsProp);
        }

        location.reload();
    }

    toggleDarkmode(initial = false) {
        if (!initial) {
            localStorage.setItem("darkmode", JSON.stringify(!this.getDarkmode()));
        }
        if (this.getDarkmode()) {
            document.querySelector("html")?.setAttribute("darkmode", "");
        } else {
            document.querySelector("html")?.removeAttribute("darkmode");
        }
    }

    getDarkmode() {
        return JSON.parse(localStorage.getItem("darkmode") || "false");
    }

    isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    createFileInput() {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".json";
        fileInput.style.display = "none";
        return fileInput;
    }

    async import() {
        let importJson: string | null = null;

        if (this.isSafari()) {
            importJson = prompt("Paste your JSON here");
            if (!importJson || typeof importJson !== "string") {
                return alert("Invalid/missing JSON file");
            }
        } else {
            importJson = await new Promise(resolve => {
                const fileInput = this.createFileInput();
                fileInput.onchange = async (evt: any) => {
                    const file = evt.target.files[0];
                    if (!file) {
                        return alert("No JSON file selected");
                    }
        
                    resolve(await new Promise(resolve => {
                        const reader = new FileReader();
        
                        reader.onload = (e) => {
                            const importJson = e.target?.result;
                            if (!importJson || typeof importJson !== "string") {
                                return alert("Invalid JSON file");
                            }
        
                            resolve(importJson);
                        };
        
                        reader.readAsText(file);
                    }));
                };
                fileInput.click();
            });
        }

        if (!importJson || typeof importJson !== "string") {
            return alert("Invalid JSON file");
        }

        const confirmation = confirm("Importing will overwrite all existing settings. Are you sure?");
        if (!confirmation) {
            return;
        }

        const data = JSON.parse(importJson);
        for (const [key, value] of Object.entries(data)) {
            if (key === LS_HISTORY) {
                const parsed = JSON.parse(value as string).slice(0, 1000);
                localStorage.setItem(key, JSON.stringify(parsed));
            } else {
                localStorage.setItem(key, value as string);
            }
        }

        setTimeout(() => {
            alert("Import completed successfully!");
            window.location.reload();
        }, 400);
    }

    export() {
        const exportJson: Record<string, string> = {};
        for (const lsProp of LS_PROPS) {
            const propVal = localStorage.getItem(lsProp)
            if (propVal) {
                exportJson[lsProp] = propVal;
            }
        }

        downloadFile(
            new Blob([JSON.stringify(exportJson)], { type: "text/plain" }),
            `syllogimous-export_${new Date().toLocaleDateString("sv")}.json`
        );

        setTimeout(() => alert("Export completed successfully!"), 400);
    }
}
