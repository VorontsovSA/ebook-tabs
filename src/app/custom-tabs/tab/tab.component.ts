import {Component, ContentChild, Input} from '@angular/core';
import {TabTitleComponent} from '../tab-title/tab-title.component';

@Component({
  selector: 'tab',
  template: `
      <ng-container ngProjectAs="azazaz">
      <ng-content *ngIf="active" select="tab-content"></ng-content>
      </ng-container>
  `
})
export class TabComponent {
  @ContentChild(TabTitleComponent) title: TabTitleComponent;
  @Input() active = false;
}
