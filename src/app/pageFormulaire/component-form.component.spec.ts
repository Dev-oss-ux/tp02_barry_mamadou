import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pageFormulaire } from './component-form.component';

describe('pageFormulaire', () => {
  let component: pageFormulaire;
  let fixture: ComponentFixture<pageFormulaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ pageFormulaire ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(pageFormulaire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
