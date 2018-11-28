import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Individual } from './models/individual.model';
import { Gender } from './models/gender.model';
import { RxFormModelBindingService } from '../../projects/drmueller/ng-rx-forms2/src/public_api';
import { RelayCommand } from '@drmueller/ng-base-directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public formGroup: FormGroup;
  public genders = Gender;
  public individual: Individual;
  public saveCommand: RelayCommand;

  public constructor(private formBuilder: FormBuilder, private binder: RxFormModelBindingService) {
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      lastName: [''],
      height: [],
      gender: [],
      birthdate: []
    });
  }

  public ngOnInit(): void {
    this.saveCommand = new RelayCommand(() => this.save(), () => this.formGroup.dirty && this.formGroup.valid);

    this.individual = <Individual>{
      birthdate: new Date(1986, 12, 29),
      firstName: 'Matthias',
      height: 186,
      gender: Gender.Female,
      lastName: 'Müller'
    };

    this.binder.bindModelToFormGroup(this.individual, this.formGroup);
  }

  public save(): void {
    this.binder.bindFormGroupToModel(this.formGroup, this.individual);
  }
}
