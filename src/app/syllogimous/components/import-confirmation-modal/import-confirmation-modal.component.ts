import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-import-confirmation-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Import Game Data</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <div class="alert alert-warning">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        <strong>Warning:</strong> Importing game data will overwrite your current progress, history, settings, and stats.
      </div>
      
      <div *ngIf="fileInfo" class="mt-3">
        <h5>File Information:</h5>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between" *ngIf="points !== null">
            <span>Points:</span> <strong>{{points}}</strong>
          </li>
          <li class="list-group-item d-flex justify-content-between" *ngIf="fileInfo?.lastModified">
            <span>Last Modified:</span> <strong>{{formatDate(fileInfo?.lastModified || 0)}}</strong>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Size:</span> <strong>{{formatSize(fileInfo?.size || 0)}}</strong>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Filename:&nbsp;&nbsp;</span> <strong>{{fileInfo?.name}}</strong>
          </li>
        </ul>
      </div>
      
      <p class="mt-3">Do you want to continue with the import?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="activeModal.dismiss()">Cancel</button>
      <button type="button" class="btn btn-primary" (click)="activeModal.close()">Continue Import</button>
    </div>
  `
})
export class ImportConfirmationModalComponent implements OnInit {
  @Input() fileInfo?: File;
  points: number | null = null;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.extractPointsFromFile();
  }

  extractPointsFromFile() {
    if (!this.fileInfo) return;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      try {
        const data = JSON.parse(e.target.result);
        
        // Check if it's a versioned format
        if (data.version !== undefined && data.data) {
          // Try to find points in the data
          if (data.data.score) {
            this.points = this.extractPointsValue(data.data.score);
          } else {
            // Look for any key that might contain score or points
            for (const key in data.data) {
              if (key.toLowerCase().includes('score') || key.toLowerCase().includes('point')) {
                this.points = this.extractPointsValue(data.data[key]);
                if (this.points !== null) break;
              }
            }
          }
        } else {
          // Legacy format - direct localStorage dump
          if (data.score) {
            this.points = this.extractPointsValue(data.score);
          } else {
            // Look for any key that might contain score or points
            for (const key in data) {
              if (key.toLowerCase().includes('score') || key.toLowerCase().includes('point')) {
                this.points = this.extractPointsValue(data[key]);
                if (this.points !== null) break;
              }
            }
          }
        }
      } catch (error) {
        console.error('Error parsing file for points:', error);
      }
    };
    
    reader.readAsText(this.fileInfo);
  }

  extractPointsValue(scoreData: any): number | null {
    if (typeof scoreData === 'number') {
      return scoreData;
    } else if (typeof scoreData === 'string') {
      try {
        const parsed = JSON.parse(scoreData);
        if (typeof parsed === 'number') {
          return parsed;
        } else if (parsed && typeof parsed === 'object') {
          // Try to find a points or score property
          for (const key in parsed) {
            if (
              (key.toLowerCase().includes('score') || key.toLowerCase().includes('point')) && 
              typeof parsed[key] === 'number'
            ) {
              return parsed[key];
            }
          }
        }
      } catch {
        // If it's not valid JSON, try to parse it as a number
        const num = Number(scoreData);
        if (!isNaN(num)) {
          return num;
        }
      }
    } else if (scoreData && typeof scoreData === 'object') {
      // Try to find a points or score property
      for (const key in scoreData) {
        if (
          (key.toLowerCase().includes('score') || key.toLowerCase().includes('point')) && 
          typeof scoreData[key] === 'number'
        ) {
          return scoreData[key];
        }
      }
    }
    
    return null;
  }

  formatSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleString();
  }
} 