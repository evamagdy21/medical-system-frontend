import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalsRoutingModule } from './hospitals-routing.module';
import { HospitalsComponent } from './hospitals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from '../../common/filter.pipe'
import { OrderByPipe } from '../../common/order-by.pipe';
@NgModule({
  declarations: [HospitalsComponent, FilterPipe,OrderByPipe],
  imports: [
    CommonModule,
    HospitalsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class HospitalsModule { }
