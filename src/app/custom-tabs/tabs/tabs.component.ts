import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges
} from '@angular/core';
import {TabComponent} from '../tab/tab.component';


@Component({
  selector: 'tabs',
  template: `
      <section class="tab-set">
          <ul class="nav nav-tabs">
              <li *ngFor="let tab of tabs" [class.active]="tab.active">
                  <a (click)="selectTab(tab)" class="btn">
                      <span [innerHTML]="tab.title.getTitle()">
                      </span>
                  </a>
              </li>
          </ul>
          <div class="tab-content">
              <ng-content></ng-content>
          </div>
      </section>
  `
})
export class TabsComponent implements AfterContentInit, OnChanges {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() onSelect = new EventEmitter();
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      setTimeout(() => {
        this.selectTab(this.tabs.first);
      });
    }
  }

  selectTab(tab: TabComponent){
    this.tabs.toArray().forEach(tab => tab.active = false);

    tab.active = true;
    this.onSelect.emit(tab);
  }
}
