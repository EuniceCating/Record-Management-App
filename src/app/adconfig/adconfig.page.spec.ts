import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdconfigPage } from './adconfig.page';

describe('AdconfigPage', () => {
  let component: AdconfigPage;
  let fixture: ComponentFixture<AdconfigPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdconfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
