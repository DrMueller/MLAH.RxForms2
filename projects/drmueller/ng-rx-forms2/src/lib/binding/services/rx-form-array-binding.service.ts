import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { IParameterlessConstructor } from '@drmueller/language-extensions';
import { RxFormGroupBindingService } from './rx-form-group-binding.service';

@Injectable({
  providedIn: 'root'
})
export class RxFormArrayBindingService {

  public constructor(private formGroupBinder: RxFormGroupBindingService) { }

  public createFromArray<T>(formArray: FormArray, ctorFn: IParameterlessConstructor<T>): T[] {
    return formArray.controls.map((formGroup: FormGroup) => {
      const obj = new ctorFn();
      this.formGroupBinder.bindToModel(formGroup, obj);
      return obj;
    });
  }
}
