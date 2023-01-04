import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pageRendu } from './component-summary.component';

describe('pageRendu', () => {
  let component: pageRendu;
  let fixture: ComponentFixture<pageRendu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ pageRendu ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(pageRendu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
