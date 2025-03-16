import { Injectable } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { downloadFile } from 'src/app/utils/file';
import { Router } from '@angular/router';
import { EnumScreens } from '../constants/syllogimous.constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Current schema version - increment when making breaking changes
const CURRENT_VERSION = 1;

interface ExportData {
  version: number;
  timestamp: number;
  data: Record<string, any>;
}

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  
  constructor(
    private toaster: ToastService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  /**
   * Export all localStorage data to a versioned JSON file
   */
  exportData(): void {
    try {
      // Create an object with all localStorage data
      const allData: Record<string, any> = {};
      
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          try {
            allData[key] = JSON.parse(localStorage.getItem(key) || 'null');
          } catch {
            // If not valid JSON, store as string
            allData[key] = localStorage.getItem(key);
          }
        }
      }
      
      // Create a versioned export structure
      const exportData: ExportData = {
        version: CURRENT_VERSION,
        timestamp: Date.now(),
        data: allData
      };
      
      // Format current date for the filename
      const date = new Date().toISOString().split('T')[0];
      const filename = `syllogimous_data_${date}.json`;
      
      // Download as JSON file
      const dataStr = JSON.stringify(exportData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      downloadFile(dataBlob, filename);
      
      this.toaster.show('Game data exported successfully!', { 
        classname: 'bg-success text-light' 
      });
    } catch (error) {
      console.error('Export failed:', error);
      this.toaster.show('Failed to export game data. Please try again.', { 
        classname: 'bg-danger text-light' 
      });
    }
  }

  /**
   * Import game data from a versioned JSON file
   * @param file The JSON file containing game data
   */
  importData(file: File): void {
    const reader = new FileReader();
    
    reader.onload = (e: any) => {
      try {
        // Parse the file content
        const importedData = JSON.parse(e.target.result);
        
        // Validate the imported data structure
        if (!this.isValidImportFormat(importedData)) {
          throw new Error('Invalid data format');
        }
        
        // Handle version differences if needed
        const migratedData = this.migrateDataIfNeeded(importedData);
        
        // Create a backup of current data
        const currentDataBackup = this.createBackup();
        
        try {
          // Clear current localStorage
          localStorage.clear();
          
          // Import the data
          Object.entries(migratedData.data).forEach(([key, value]) => {
            if (value !== null) {
              if (typeof value === 'object') {
                localStorage.setItem(key, JSON.stringify(value));
              } else {
                localStorage.setItem(key, value as string);
              }
            }
          });
          
          this.toaster.show('Game data imported successfully! Reloading...', { 
            classname: 'bg-success text-light' 
          });
          
          // Reload to apply changes
          setTimeout(() => {
            this.router.navigate([EnumScreens.Start]);
            window.location.reload();
          }, 1500);
        } catch (importError) {
          // Restore the backup if import fails
          this.restoreBackup(currentDataBackup);
          throw importError;
        }
      } catch (error) {
        console.error('Import failed:', error);
        this.toaster.show('Failed to import game data: ' + (error instanceof Error ? error.message : 'Invalid format'), { 
          classname: 'bg-danger text-light' 
        });
      }
    };
    
    reader.onerror = () => {
      this.toaster.show('Error reading file.', { 
        classname: 'bg-danger text-light' 
      });
    };
    
    reader.readAsText(file);
  }

  /**
   * Validates that the imported data has the expected format
   */
  private isValidImportFormat(data: any): boolean {
    // Check if data has the required structure
    if (!data || typeof data !== 'object') return false;
    
    // If it's a legacy format (no version field), it's just a direct localStorage dump
    if (data.version === undefined) {
      return true; // Accept legacy format
    }
    
    // For versioned data, validate the structure
    return (
      typeof data.version === 'number' &&
      typeof data.timestamp === 'number' &&
      typeof data.data === 'object' &&
      data.data !== null
    );
  }

  /**
   * Migrates data from older versions to current version if needed
   */
  private migrateDataIfNeeded(importedData: any): ExportData {
    // If it's already in the current version, return as is
    if (importedData.version === CURRENT_VERSION) {
      return importedData;
    }
    
    // Handle legacy format (direct localStorage dump)
    if (importedData.version === undefined) {
      return {
        version: CURRENT_VERSION,
        timestamp: Date.now(),
        data: importedData
      };
    }
    
    // Handle other version migrations
    // For version 0 to 1, etc.
    switch (importedData.version) {
      // Add migration logic for specific versions as the app evolves
      default:
        // If no specific migration needed, just update the version
        return {
          ...importedData,
          version: CURRENT_VERSION
        };
    }
  }

  /**
   * Creates a backup of current localStorage data
   */
  private createBackup(): Record<string, string> {
    const backup: Record<string, string> = {};
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        backup[key] = localStorage.getItem(key) || '';
      }
    }
    
    return backup;
  }

  /**
   * Restores localStorage from backup
   */
  private restoreBackup(backup: Record<string, string>): void {
    localStorage.clear();
    
    Object.entries(backup).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
    
    this.toaster.show('Import failed. Previous data has been restored.', { 
      classname: 'bg-warning text-dark' 
    });
  }
} 