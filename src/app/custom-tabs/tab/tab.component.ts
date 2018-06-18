import {Component, Input} from '@angular/core';

@Component({
  selector: 'tab',
  template: `
      <ng-content *ngIf="active"></ng-content>
      <ng-container *ngIf="template && active"
                    [ngTemplateOutlet]="template"
                    [ngTemplateOutletContext]="{ person: dataContext }"
      >
      </ng-container>
  `
})
export class TabComponent {
  @Input() active = false;
  @Input('title') title: string;
  @Input() isCloseable = false;
  @Input() template;
  @Input() dataContext;
}
