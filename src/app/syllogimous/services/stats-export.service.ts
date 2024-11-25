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
        const date = new Date(timestamp);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`;
    }

    private getTimerSetting(timerTypeOnAnswer: string): string {
        switch(timerTypeOnAnswer) {
            case "0": return "No Timer";
            case "1": return "Fixed Timer";
            case "2": return "Adaptive Timer";
            default: return "Unknown";
        }
    }

    /*private calculateScoreAtPoint(questions: any[], index: number): number {
        let score = 0;
        
        // Calculate score up to this point
        for (let i = 0; i <= index; i++) {
            const q = questions[i];
            
            if (q.userAnswer === undefined) {
                // Timeout: -5 points
                score = Math.max(0, score - 5);
            } else if (q.userAnswer === q.isValid) {
                // Correct answer: +10 points
                score += 10;
            } else {
                // Incorrect answer: -5 points
                score = Math.max(0, score - 5);
            }
        }
        
        return score;
    }*/

    exportStats() {
        const questions = [...this.sylSrv.questionsFromLS]
            .sort((a, b) => a.createdAt - b.createdAt);
            
        // Create CSV header
        let csvContent = [
            "ID",
            "Timestamp",
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

        // Add data rows
        questions.forEach((q, index) => {
            const timeTaken = (q.answeredAt - q.createdAt) / 1000;
            // const scoreAtPoint = this.calculateScoreAtPoint(questions, index);
            
            const row = [
                index + 1,
                this.formatDateTime(q.createdAt),
                q.type,
                q.premises.length,
                timeTaken.toFixed(1),
                q.isValid,
                q.userAnswer === undefined ? 'Timeout' : q.userAnswer,
                q.userAnswer === undefined ? 'Timeout' : (q.userAnswer === q.isValid ? 'Correct' : 'Incorrect'),
                this.getTimerSetting(q.timerTypeOnAnswer),
                q.userScore,
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
        a.setAttribute('download', `syllogimous_history_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}