import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddocPage } from './addoc.page';

describe('AddocPage', () => {
  let component: AddocPage;
  let fixture: ComponentFixture<AddocPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
