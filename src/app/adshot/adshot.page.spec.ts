import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdshotPage } from './adshot.page';

describe('AdshotPage', () => {
  let component: AdshotPage;
  let fixture: ComponentFixture<AdshotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdshotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  public progress = 0;

  constructor() {
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }
}