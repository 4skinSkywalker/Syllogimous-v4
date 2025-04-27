import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GameTimerService {

    interval?: any;
    remainingSeconds = 0;
    running = false;

    start(seconds?: number) {
        return new Promise<void>((resolve, reject) => {
            if (this.running) {
                return reject("GameTimerService: Already running");
            }
    
            if (seconds == null) {
                seconds = this.remainingSeconds;
            }
    
            if (seconds <= 0) {
                return reject("GameTimerService: Invalid seconds");
            }
    
            this.remainingSeconds = seconds;
            this.running = true;
    
            this.interval = setInterval(() => {
                if (this.remainingSeconds > 0) {
                    this.remainingSeconds--;
                    if (this.remainingSeconds === 0) {
                        this.stop();
                        return resolve();
                    }
                }
            }, 1000);
        });
    }

    pause() {
        if (!this.running) {
            return console.warn("GameTimerService: Not running");
        }

        this.running = false;
        clearInterval(this.interval);
    }

    stop() {
        this.pause();
        this.remainingSeconds = 0;
    }
}
