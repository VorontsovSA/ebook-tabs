import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList
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
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.cleanSelection();

    this.tabs.changes.subscribe(_ =>
      this.cleanSelection() // subsequent calls to processChildren
    );
  }

  selectTab(tab: TabComponent){
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
  }

  cleanSelection() {
    let activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      setTimeout(() => {
        this.selectTab(this.tabs.first);
      });
    }
  }
}
