import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { NgBaseDirectivesModule } from '@drmueller/ng-base-directives';
import { NgMaterialExtensionsModule } from '@drmueller/ng-material-extensions';

import { NgRxForms2Module } from '../../projects/drmueller/ng-rx-forms2/src/public_api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NgBaseDirectivesModule,
    NgMaterialExtensionsModule.forRoot(),
    ReactiveFormsModule,
    NgRxForms2Module.forRoot(),
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
