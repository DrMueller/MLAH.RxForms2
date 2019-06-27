import { NgModule, ModuleWithProviders } from '@angular/core';
import { ValidationErrorsComponent } from './validation/components/validation-errors/validation-errors.component';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule, ErrorStateMatcher } from '@angular/material';

import { RxErrorStateMatcherService } from './validation/services/rx-error-state-matcher.service';
import { VALIDATION_ERROR_MAPPER_TOKEN } from './validation/services/error-mappers/constants';
import { MinLengthErrorMapperService } from './validation/services/error-mappers/min-length-error-mapper.service';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  declarations: [ValidationErrorsComponent],
  exports: [ValidationErrorsComponent]
})

export class NgRxForms2Module {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgRxForms2Module,
      providers: [
        { provide: ErrorStateMatcher, useClass: RxErrorStateMatcherService },
        {
          provide: VALIDATION_ERROR_MAPPER_TOKEN,
          multi: true,
          useClass: MinLengthErrorMapperService
        }
      ]
    };
  }
}
