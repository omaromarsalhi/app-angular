import { Residence } from '../core/models/Residence';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './residences/residence/residences.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponentComponent } from './residences/add-residence-component/add-residence-component.component';
import { AppartementsComponent } from './appartments/appartements/appartements.component';
import { AppartmentsByResidenceComponent } from './appartments/appartments-by-residence/appartments-by-residence.component';
import { AddAppartmentComponent } from './appartments/add-appartment/add-appartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponentComponent,
    AppartementsComponent,
    AppartmentsByResidenceComponent,
    AddAppartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
