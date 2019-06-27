import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualBaseDataComponent } from './individual-base-data.component';

describe('IndividualBaseDataComponent', () => {
  let component: IndividualBaseDataComponent;
  let fixture: ComponentFixture<IndividualBaseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualBaseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualBaseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
