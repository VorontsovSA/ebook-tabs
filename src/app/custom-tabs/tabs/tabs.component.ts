import {AfterContentInit, Component, ComponentFactoryResolver, ContentChildren, QueryList, ViewChild} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import {DynamicTabsDirective} from '../dynamic-tabs.directive';


@Component({
  selector: 'tabs',
  template: `
    <section class="tab-set">
      <ul class="nav nav-tabs">
        <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
          <a href="#">{{tab.title}}</a>
        </li>
        <!-- dynamic tabs -->
        <li *ngFor="let tab of dynamicTabs" (click)="selectTab(tab)" [class.active]="tab.active">
          <a href="#">{{tab.title}} <span class="tab-close" *ngIf="tab.isCloseable" (click)="closeTab(tab)">x</span></a>
        </li>
      </ul>
      <div class="tab-content">
        <ng-content></ng-content>
        <ng-template dynamic-tabs #container></ng-template>
      </div>
    </section>
  `
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild(DynamicTabsDirective) dynamicTabPlaceholder: DynamicTabsDirective;
  dynamicTabs: TabComponent[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      setTimeout(() => {
        this.selectTab(this.tabs.first);
      });
    }
  }

  openTab(title: string, template, data, isCloseable = false) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TabComponent);

    const viewContainerRef = this.dynamicTabPlaceholder.viewContainer;

    const componentRef = viewContainerRef.createComponent(componentFactory);

    const instance: TabComponent = componentRef.instance as TabComponent;
    instance.title = title;
    instance.template = template;
    instance.dataContext = data;
    instance.isCloseable = isCloseable;

    this.dynamicTabs.push(componentRef.instance as TabComponent);

    // this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    this.dynamicTabs.forEach(tab => tab.active = false);

    tab.active = true;
  }

  closeTab(tab: TabComponent) {
    for (let i = 0; i < this.dynamicTabs.length; i++) {
      if (this.dynamicTabs[i] === tab) {
        this.dynamicTabs.splice(i, 1);

        const viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
        viewContainerRef.remove(i);

        this.selectTab(this.tabs.first);
        break;
      }
    }
  }

  closeActiveTab() {
    let activeTabs = this.dynamicTabs.filter((tab) => tab.active);
    if (activeTabs.length > 0) {
      this.closeTab(activeTabs[0]);
    }
  }
}
