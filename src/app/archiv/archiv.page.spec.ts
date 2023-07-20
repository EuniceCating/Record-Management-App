import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchivPage } from './archiv.page';

describe('ArchivPage', () => {
  let component: ArchivPage;
  let fixture: ComponentFixture<ArchivPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArchivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
