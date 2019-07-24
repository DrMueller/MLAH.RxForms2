import { Component, OnInit } from '@angular/core';
import { AddressFormBuilderService } from 'src/app/services';
import { FormArray } from '@angular/forms';
import { IndividualMediatorService } from 'src/app/services/individual-mediator.service';
import { RxFormArrayBindingService } from 'projects/drmueller/ng-rx-forms2/src/public_api';
import { Address } from 'src/app/models';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  public formArray: FormArray;
  constructor(
    private mediator: IndividualMediatorService,
    private formBuilder: AddressFormBuilderService,
    private binder: RxFormArrayBindingService) { }

  public ngOnInit(): void {
    this.mediator.individual$.subscribe(ind => {
      const addresses = ind.addresses || [];
      this.formArray = this.formBuilder.buildFormArray(addresses);

      this.formArray.statusChanges.subscribe((sr: string) => {
        this.mediator.changeAddressValidity(sr === 'VALID');
      });

      setTimeout(() => this.mediator.changeAddressValidity(this.formArray.status === 'VALID'));
    });

    this.mediator.newAddressRequested$.subscribe(() => {
      this.formArray.push(this.formBuilder.createFormGroup());
    });

    this.mediator.saveRequested$.subscribe(ind => {
      ind.addresses = this.createAddresses();
    });
  }

  public deleteAddress(index: number): void {
    this.formArray.removeAt(index);
  }

  private createAddresses(): Address[] {
    const addresses = this.binder.createFromArray(this.formArray, Address);
    return addresses;
  }
}
