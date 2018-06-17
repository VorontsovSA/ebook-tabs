import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'tab-title',
  template:`
    <p #titleContent>
      <ng-content></ng-content>
    </p>
  `
})
export class TabTitleComponent implements OnInit, AfterViewInit {
  @ViewChild('titleContent') titleContent: ElementRef;

  ngAfterViewInit() {
    console.log(this.titleContent.nativeElement.innerHTML);
  }
  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    return this.titleContent.nativeElement.innerHTML;
  }
}
