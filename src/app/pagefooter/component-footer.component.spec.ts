import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pageFooter } from './component-footer.component';

describe('pageFooter', () => {
  let component: pageFooter;
  let fixture: ComponentFixture<pageFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ pageFooter ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(pageFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
