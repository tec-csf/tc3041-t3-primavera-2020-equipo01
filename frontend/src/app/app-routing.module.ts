import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCasesComponent } from './cases/all-cases/all-cases.component';
import { FormCasesComponent } from './cases/form-cases/form-cases.component';
import { AllBuisnessesComponent } from './buisnesses/all-buisnesses/all-buisnesses.component';
import { FormBuisnessesComponent } from './buisnesses/form-buisnesses/form-buisnesses.component';
import { AllLocationsComponent } from './locations/all-locations/all-locations.component';
import { FormLocationsComponent } from './locations/form-locations/form-locations.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "cases"},
  {path: "cases", component: AllCasesComponent},
  {path: "cases/add", component: FormCasesComponent},
  {path: "cases/edit/:id", component: FormCasesComponent},
  {path: "buisnesses", component: AllBuisnessesComponent},
  {path: "buisnesses/add", component: FormBuisnessesComponent},
  {path: "buisnesses/edit/:id", component: FormBuisnessesComponent},
  {path: "locations", component: AllLocationsComponent},
  {path: "locations/add", component: FormLocationsComponent},
  {path: "locations/edit/:id", component: FormLocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
