import {Component, ContentChild, Input, OnInit, AfterContentInit, TemplateRef, ViewChild} from '@angular/core';
import {TabTitleComponent} from '../tab-title/tab-title.component';

@Component({
  selector: 'tab',
  template: `
      <ng-container ngProjectAs="azazaz">
      <ng-content *ngIf="active" select="tab-content"></ng-content>
      </ng-container>
  `
})
export class TabComponent implements OnInit, AfterContentInit {
  @ContentChild(TabTitleComponent) title: TabTitleComponent;
  @ContentChild(TabTitleComponent) content: TabTitleComponent;
  @Input() active = false;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.title);
    console.log(this.content);
  }
}
