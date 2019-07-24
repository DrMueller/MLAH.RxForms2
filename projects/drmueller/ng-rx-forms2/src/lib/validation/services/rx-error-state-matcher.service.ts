import { ErrorStateMatcher } from '@angular/material';
import { FormControl, NgForm } from '@angular/forms';
import { RxFormControlValidationService } from './rx-form-control-validation.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxErrorStateMatcherService implements ErrorStateMatcher {
  public constructor(private validationService: RxFormControlValidationService) {
  }

  public isErrorState(formControl: FormControl, _: NgForm): boolean {
    return !this.validationService.checkIfFormControlIsValid(formControl);
  }
}
