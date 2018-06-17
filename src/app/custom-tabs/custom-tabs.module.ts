import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabComponent} from './tab/tab.component';
import {TabsComponent} from './tabs/tabs.component';
import {TabTitleComponent} from './tab-title/tab-title.component';
import {TabContentComponent} from './tab-content/tab-content.component';

export const customElements = [
  TabComponent,
  TabsComponent,
  TabTitleComponent,
  TabContentComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...customElements
  ],
  declarations: [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent]
})
export class CustomTabsModule { }
