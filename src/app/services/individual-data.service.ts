import { Injectable } from '@angular/core';
import { Individual, BaseData, Gender, Address } from '../models';

@Injectable({
  providedIn: 'root'
})
export class IndividualDataService {

  constructor() { }

  public loadIndividual(): Individual {
    const ind = new Individual();
    ind.baseData = new BaseData();
    ind.baseData.birthdate = new Date(1976, 12, 29);
    ind.baseData.firstName = 'Matthias';
    ind.baseData.gender = Gender.Male;
    ind.baseData.height = 185;
    ind.baseData.lastName = 'Müller';

    const adr1 = new Address();
    adr1.cityName = 'Alterswil';
    adr1.streetName = 'Fakestreet 1';
    adr1.zip = 1717;

    const adr2 = new Address();
    adr2.cityName = 'Tafers';
    adr2.streetName = 'Hauptstrasse 121';
    adr2.zip = 2020;

    const adr3 = new Address();
    adr3.cityName = 'Schwarzsee';
    adr3.streetName = 'Falihöli';
    adr3.zip = 1719;

    ind.addresses = [];
    ind.addresses.push(adr1);
    ind.addresses.push(adr2);
    ind.addresses.push(adr3);

    return ind;
  }
}
