import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent} from './tab/tab.component';
import {TabsComponent} from './tabs/tabs.component';
import {DynamicTabsDirective} from './dynamic-tabs.directive';

export const customElements = [
  TabComponent,
  TabsComponent,
  DynamicTabsDirective,
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...customElements
  ],
  declarations: [
    ...customElements
  ],
  entryComponents: [
    TabComponent
  ],
})
export class CustomTabsModule {
}
