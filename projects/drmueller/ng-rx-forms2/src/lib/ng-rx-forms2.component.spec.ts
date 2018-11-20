import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxForms2Component } from './ng-rx-forms2.component';

describe('NgRxForms2Component', () => {
  let component: NgRxForms2Component;
  let fixture: ComponentFixture<NgRxForms2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRxForms2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxForms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
