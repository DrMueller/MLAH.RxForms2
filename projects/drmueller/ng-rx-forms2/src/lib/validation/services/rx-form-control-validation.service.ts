import { Injectable, Inject } from '@angular/core';
import { ValidationError } from '../models/validation-error.model';
import { FormControl } from '@angular/forms';
import { VALIDATION_ERROR_MAPPER_TOKEN } from './error-mappers/constants';
import { IValidationErrorMapperService } from './error-mappers/validation-error-mapper-service.interface';

@Injectable({
  providedIn: 'root'
})
export class RxFormControlValidationService {
  public constructor(@Inject(VALIDATION_ERROR_MAPPER_TOKEN) private validationErrorMappers: IValidationErrorMapperService[]) {
  }

  public validateFormControl(formControl: FormControl): ValidationError[] {
    if (this.checkIfFormControlIsValid(formControl)) {
      return [];
    }

    const result: ValidationError[] = [];
    const errorKeys = Object.keys(formControl.errors);
    errorKeys.forEach(errorKey => {
      const errorMappings = this
        .validationErrorMappers
        .map(mapper => mapper.map(errorKey, formControl.errors[errorKey]))
        .filter(mappingResult => mappingResult.isSuccess);

      if (errorMappings.length > 0) {
        result.push(errorMappings[0].validationError);
      } else {
        // Fallback, if Mappers are missing
        result.push(new ValidationError(errorKey, errorKey));
      }
    });

    return result;
  }

  public checkIfFormControlIsValid(formControl: FormControl): boolean {
    return (!formControl.touched && !formControl.dirty) || formControl.valid;
  }
}
