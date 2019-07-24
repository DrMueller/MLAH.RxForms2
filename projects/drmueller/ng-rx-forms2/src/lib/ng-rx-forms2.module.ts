import { NgModule, ModuleWithProviders } from '@angular/core';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule, ErrorStateMatcher } from '@angular/material';

import { RxFormControlValidationService } from './services/rx-form-control-validation.service';
import { RxFormModelBindingService } from './services/rx-form-model-binding.service';
import { RxErrorStateMatcherService } from './services/rx-error-state-matcher.service';
import { VALIDATION_ERROR_MAPPER_TOKEN } from './services/error-mappers/constants';
import { MinLengthErrorMapperService } from './services/error-mappers/min-length-error-mapper.service';
import { ValidationErrorsDirective } from './directives/validation-errors.directive';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  declarations: [ValidationErrorsComponent, ValidationErrorsDirective],
  exports: [ValidationErrorsComponent]
})

export class NgRxForms2Module {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgRxForms2Module,
      providers: [
        RxFormControlValidationService,
        RxFormModelBindingService,
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
