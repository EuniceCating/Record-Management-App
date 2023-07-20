import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdloginPage } from './adlogin.page';

describe('AdloginPage', () => {
  let component: AdloginPage;
  let fixture: ComponentFixture<AdloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
