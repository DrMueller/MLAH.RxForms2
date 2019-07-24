import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BaseDataFormBuilderService {
  public constructor(private formBuilder: FormBuilder) { }

  public buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: [undefined, [Validators.required, Validators.maxLength(10)]],
      lastName: [undefined, [Validators.required, Validators.minLength(5)]],
      birthdate: [undefined, Validators.required],
      gender: [undefined, Validators.required]
    });
  }
}
