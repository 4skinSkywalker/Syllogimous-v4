import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';

@NgModule({
  declarations: [
    ToastsContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbToastModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbToastModule,
    ToastsContainerComponent
  ]
})
export class SharedModule { }