import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdchivPage } from './adchiv.page';

describe('AdchivPage', () => {
  let component: AdchivPage;
  let fixture: ComponentFixture<AdchivPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdchivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
