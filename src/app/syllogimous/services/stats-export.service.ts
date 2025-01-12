import { Injectable } from '@angular/core';
import { SyllogimousService } from './syllogimous.service';

@Injectable({
    providedIn: 'root'
})
export class StatsExportService {
    constructor(
        private sylSrv: SyllogimousService
    ) {}

    private formatDateTime(timestamp: number): string {
        return new Date(timestamp).toLocaleDateString("sv") + " " + new Date(timestamp).toLocaleTimeString("sv");
    }

    private getTimerSetting(timerTypeOnAnswer: string): string {
        switch(timerTypeOnAnswer) {
            case "0": return "No Timer";
            case "1": return "Custom Timer";
            case "2": return "Adaptive Timer";
            default: return "Unknown";
        }
    }

    exportStats() {
        const questions = [...this.sylSrv.questions]
            .sort((a, b) => a.createdAt - b.createdAt);
            
        // Create CSV header
        let csvContent = [
            "ID",
            "Timestamp",
            "Mode",
            "Type",
            "Number of Premises",
            "Time Taken (seconds)",
            "Correct Answer",
            "User Answer",
            "Result",
            "Timer Setting",
            "User Score",
            "Has Negation",
            "Has Meta Relations",
            "Negation Count",
            "Meta Relations Count"
        ].join(",") + "\n";

        let lastArcadeScore = 0;
        
        // Add data rows
        questions.forEach((q, index) => {
            const timeTaken = (q.answeredAt - q.createdAt) / 1000;
            if (!q.playgroundMode) {
                lastArcadeScore = q.userScore;
            }
            const row = [
                index + 1,
                this.formatDateTime(q.createdAt),
                q.playgroundMode ? 'Playground' : 'Arcade',
                q.type,
                q.premises.length,
                timeTaken.toFixed(1),
                q.isValid,
                q.userAnswer === undefined ? '- - -' : q.userAnswer,
                q.userAnswer === undefined ? 'Timeout' : (q.userAnswer === q.isValid ? 'Correct' : 'Incorrect'),
                this.getTimerSetting(q.timerTypeOnAnswer),
                q.playgroundMode ? lastArcadeScore : q.userScore,
                q.negations > 0 ? 'Yes' : 'No',
                q.metaRelations > 0 ? 'Yes' : 'No',
                q.negations || 0,
                q.metaRelations || 0
            ];
            csvContent += row.join(',') + '\n';
        });

        // Convert to blob and download
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', `syllogimous_history_${new Date().toLocaleDateString("sv")}.csv`);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}