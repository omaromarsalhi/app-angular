import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residence/residences.component';
import { HomeComponent } from './home/home.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponentComponent } from './residences/add-residence-component/add-residence-component.component';


const routes: Routes = [
  { path: '', redirectTo: 'residence', pathMatch: 'full' },
  { path: 'residence', component: ResidencesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'residenceDetails/:id', component: ResidenceDetailsComponent },
  { path: 'addResidence', component: AddResidenceComponentComponent },
  { path: 'updateResidence', component: AddResidenceComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
