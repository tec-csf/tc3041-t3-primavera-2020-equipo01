import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AllCasesComponent } from './cases/all-cases/all-cases.component';
import { FormCasesComponent } from './cases/form-cases/form-cases.component';
import { AllBuisnessesComponent } from './buisnesses/all-buisnesses/all-buisnesses.component';
import { FormBuisnessesComponent } from './buisnesses/form-buisnesses/form-buisnesses.component';
import { FormLocationsComponent } from './locations/form-locations/form-locations.component';
import { AllLocationsComponent } from './locations/all-locations/all-locations.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllCasesComponent,
    FormCasesComponent,
    AllBuisnessesComponent,
    FormBuisnessesComponent,
    FormLocationsComponent,
    AllLocationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
