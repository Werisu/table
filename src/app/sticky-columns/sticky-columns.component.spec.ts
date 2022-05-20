import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyColumnsComponent } from './sticky-columns.component';

describe('StickyColumnsComponent', () => {
  let component: StickyColumnsComponent;
  let fixture: ComponentFixture<StickyColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
