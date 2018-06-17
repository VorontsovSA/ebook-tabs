import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'tab-title',
  template:`
    <p #titleContent>
      <ng-content></ng-content>
    </p>
  `
})
export class TabTitleComponent {
  @ViewChild('titleContent') titleContent: ElementRef;

  constructor() { }

  getTitle() {
    return this.titleContent.nativeElement.innerHTML;
  }
}
