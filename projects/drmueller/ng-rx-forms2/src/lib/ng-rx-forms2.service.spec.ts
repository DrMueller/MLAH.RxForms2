import { TestBed, inject } from '@angular/core/testing';

import { NgRxForms2Service } from './ng-rx-forms2.service';

describe('NgRxForms2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgRxForms2Service]
    });
  });

  it('should be created', inject([NgRxForms2Service], (service: NgRxForms2Service) => {
    expect(service).toBeTruthy();
  }));
});
