import { Component, TemplateRef } from '@angular/core';

interface Toast {
  textOrTpl: string | TemplateRef<any>;
  position?: string;
  classname?: string;
  delay?: number;
}

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts-container.component.html',
  styleUrls: ['./toasts-container.component.css']
})
export class ToastsContainerComponent {
  toasts: Toast[] = [];

  isTemplate(toast: Toast) { 
    return toast.textOrTpl instanceof TemplateRef; 
  }

  trackById(index: number) {
    return index;
  }

  deleteToast(index: number) {
    this.toasts.splice(index, 1);
  }

  get toastService() {
    return {
      toasts: this.toasts,
      remove: (toast: Toast) => {
        const index = this.toasts.indexOf(toast);
        if (index > -1) {
          this.toasts.splice(index, 1);
        }
      }
    };
  }
}

// Make sure we're exporting the component
export { ToastsContainerComponent as default };