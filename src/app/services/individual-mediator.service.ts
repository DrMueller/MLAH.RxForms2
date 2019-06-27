import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Individual } from '../models';

@Injectable()
export class IndividualMediatorService {
  public newAddressRequested$: Subject<void> = new Subject<void>();
  public saveRequested$: Subject<Individual> = new Subject<Individual>();

  private _addressesValid = false;
  private _baseDataValid = false;
  private _individualValid$: Subject<boolean> = new Subject<boolean>();
  private _individual$: BehaviorSubject<Individual>;

  public changeAddressValidity(valid: boolean): void {
    this._addressesValid = valid;
    this.publishValidity();
  }

  public changeBaseDataValidity(valid: boolean): void {
    this._baseDataValid = valid;
    this.publishValidity();
  }

  public get individual$(): Observable<Individual> {
    return this._individual$;
  }

  public get individualValid$(): Observable<boolean> {
    return this._individualValid$;
  }

  public initialize(individual: Individual) {
    this._individual$ = new BehaviorSubject<Individual>(individual);
  }

  private publishValidity(): void {
    const isValid = this._baseDataValid && this._addressesValid;
    this._individualValid$.next(isValid);
  }
}
