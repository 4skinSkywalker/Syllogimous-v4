import { Component } from '@angular/core';
import { ORDERED_QUESTION_TYPES, ORDERED_TIERS, TIERS_MATRIX } from '../../constants/syllogimous.constants';
import { SyllogimousService } from '../../services/syllogimous.service';

@Component({
    selector: 'app-tiers-matrix',
    templateUrl: './tiers-matrix.component.html',
    styleUrls: ['./tiers-matrix.component.scss']
})
export class TiersMatrixComponent {
    TIERS_MATRIX = TIERS_MATRIX;
    entriesOfMatrix = Object.entries(TIERS_MATRIX);
    userTierIdx = 0;

    tier = "--click below--";
    questionType = "--click below--";
    numOfPremises = "--click below--";
    cellSelI = -1;
    cellSelJ = -1;

    constructor(private sylSrv: SyllogimousService) {
        this.userTierIdx = Math.max(0, ORDERED_TIERS.findIndex(t => t === sylSrv.tier));
    }

    showDetails(i: number, j: number) {
        this.cellSelI = i;
        this.cellSelJ = j;
        this.tier = ORDERED_TIERS.find((_, _i) => _i === i) || "";
        this.questionType = ORDERED_QUESTION_TYPES.find((_, _j) => _j === j) || "";
        const ps = TIERS_MATRIX[i][j];
        this.numOfPremises = (ps === -1) ? 'Disabled': String(ps);
    }
}
