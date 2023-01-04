import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pageHeader } from './component-header.component';

describe('pageHeader', () => {
  let component: pageHeader;
  let fixture: ComponentFixture<pageHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ pageHeader ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(pageHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
