import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TabsComponent} from './custom-tabs/tabs/tabs.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('template1') template1;
  @ViewChild('template2') template2;
  @ViewChild('template3') template3;
  @ViewChild('template4') template4;
  @ViewChild('template5') template5;
  @ViewChild(TabsComponent) tabsComponent;

  templates = [];

  ngAfterViewInit() {
    this.templates = [
      this.template1,
      this.template2,
      this.template3,
      this.template4,
      this.template5,
    ];
  }

  public addTab(number) {
    this.tabsComponent.openTab(
      'Tab ' + number,
      this.templates[number - 1],
      {
        number: number
      },
      true
    );
  }
}
