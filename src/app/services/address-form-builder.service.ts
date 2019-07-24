import { Injectable } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Address } from '../models';

@Injectable({
    providedIn: 'root'
})
export class AddressFormBuilderService {
    public constructor(
        private formBuilder: FormBuilder
    ) { }

    public buildFormArray(addresses: Address[]): FormArray {
        const adrFormGroups = addresses.map(adr => this.createFormGroup(adr));
        const formArray = this.formBuilder.array(adrFormGroups);
        return formArray;
    }

    public createFormGroup(address?: Address): FormGroup {
        let cityName = '';
        let streetName = '';
        let zip: number | undefined;

        if (address) {
            cityName = address.cityName;
            streetName = address.streetName;
            zip = address.zip;
        }

        return this.formBuilder.group({
            cityName: [cityName, Validators.required],
            streetName: [streetName, Validators.required],
            zip: [zip, Validators.required]
        });
    }
}
