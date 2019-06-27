import { Component, OnInit } from '@angular/core';
import { IndividualMediatorService } from 'src/app/services/individual-mediator.service';
import { FormGroup } from '@angular/forms';
import { BaseDataFormBuilderService } from 'src/app/services';
import { RxFormGroupBindingService } from 'projects/drmueller/ng-rx-forms2/src/public_api';
import { Gender } from 'src/app/models';

@Component({
  selector: 'app-individual-base-data',
  templateUrl: './individual-base-data.component.html',
  styleUrls: ['./individual-base-data.component.scss']
})
export class IndividualBaseDataComponent implements OnInit {
  public formGroup: FormGroup;
  public genders = Gender;

  public constructor(
    private mediator: IndividualMediatorService,
    private formBuilder: BaseDataFormBuilderService,
    private formBinder: RxFormGroupBindingService) { }

  public ngOnInit(): void {
    this.mediator.individual$.subscribe(ind => {
      this.formGroup = this.formGroup || this.formBuilder.buildFormGroup();
      this.formBinder.bindToFormGroup(ind.baseData, this.formGroup);

      this.formGroup.statusChanges.subscribe((sr: string) => {
        this.mediator.changeBaseDataValidity(sr === 'VALID');
      });

      setTimeout(() => this.mediator.changeBaseDataValidity(this.formGroup.status === 'VALID'));
    });

    this.mediator.saveRequested$.subscribe(ind => {
      this.formBinder.bindToModel(this.formGroup, ind.baseData);
    });
  }

}
