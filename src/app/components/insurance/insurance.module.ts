import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceRoutingModule } from './insurance-routing.module';
import { InsuranceComponent } from '../insurance/insurance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [InsuranceComponent],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class InsuranceModule { }
