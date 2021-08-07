import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmaciesRoutingModule } from './pharmacies-routing.module';
import { PharmaciesComponent } from '../pharmacies/pharmacies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [PharmaciesComponent],
  imports: [
    CommonModule,
    PharmaciesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class PharmaciesModule { }
