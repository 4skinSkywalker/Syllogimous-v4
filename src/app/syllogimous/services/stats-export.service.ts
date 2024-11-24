import { Injectable } from '@angular/core';
import { SyllogimousService } from './syllogimous.service';
import { LS_TIMER } from '../constants/local-storage.constants';

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

    private getTimerSetting(): string {
        const timerType = localStorage.getItem(LS_TIMER);
        switch(timerType) {
            case "0": return "No Timer";
            case "1": return "Fixed Timer";
            case "2": return "Adaptive Timer";
            default: return "Unknown";
        }
    }

    exportStats() {
        const questions = [...this.sylSrv.questionsFromLS]
            .sort((a, b) => a.createdAt - b.createdAt); // Sort by oldest first
            
        // Create CSV content
        let csvContent = 'ID,Timestamp,Type,Time Taken (seconds),Correct Answer,User Answer,Result,Timer Setting\n';

        // Add data rows
        questions.forEach((q, index) => {
            const timeTaken = (q.answeredAt - q.createdAt) / 1000;
            const row = [
                index + 1,
                this.formatDateTime(q.createdAt),
                q.type,
                timeTaken.toFixed(1),
                q.isValid,
                q.userAnswer === undefined ? 'Timeout' : q.userAnswer,
                q.userAnswer === undefined ? 'Timeout' : (q.userAnswer === q.isValid ? 'Correct' : 'Incorrect'),
                this.getTimerSetting()
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