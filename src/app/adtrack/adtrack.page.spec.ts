import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdtrackPage } from './adtrack.page';

describe('AdtrackPage', () => {
  let component: AdtrackPage;
  let fixture: ComponentFixture<AdtrackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdtrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
