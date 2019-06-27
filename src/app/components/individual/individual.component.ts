import { Component, OnInit } from '@angular/core';
import { IndividualDataService } from 'src/app/services';
import { Observable } from 'rxjs';
import { IndividualMediatorService } from 'src/app/services/individual-mediator.service';
import { Individual } from 'src/app/models';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
  providers: [
    IndividualMediatorService
  ]
})
export class IndividualComponent implements OnInit {
  public savedOutput = '';
  private individual: Individual;

  public constructor(
    private dataService: IndividualDataService,
    private mediator: IndividualMediatorService) { }

  public addAddress(): void {
    this.mediator.newAddressRequested$.next();
  }

  public get canSave$(): Observable<boolean> {
    return this.mediator.individualValid$;
  }

  public ngOnInit(): void {
    this.individual = this.dataService.loadIndividual();
    this.mediator.initialize(this.individual);
  }

  public save(): void {
    this.mediator.saveRequested$.next(this.individual);
    this.savedOutput = JSON.stringify(this.individual);
  }
}
