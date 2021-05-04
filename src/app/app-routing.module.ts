import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    data: { animation: 'isLeft' }
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    data: { animation: 'isRight' }
  },
  {
    path: 'hospital-details/:hospitalId',
    loadChildren: () => import('./components/hospitals/hospitals-details/hospitals-details.module').then(m => m.HospitalsDetailsModule),

  },
  {
    path: 'hospitals-clinics',
    loadChildren: () => import('./components/hospitals/hospitals.module').then(m => m.HospitalsModule),

  },
  {
    path: 'insurance',
    loadChildren: () => import('./components/insurance/insurance.module').then(m => m.InsuranceModule),
    data: { animation: 'isRight' }
  },
  {
    path: 'insurance-details/:insuranceId',
    loadChildren: () => import('./components/insurance/insurance-details/insurance-details.module').then(m => m.InsuranceDetailsModule),

  },
  {
    path: 'pharmacies',
    loadChildren: () => import('./components/pharmacies/pharmacies.module').then(m => m.PharmaciesModule),
    data: { animation: 'isRight' }
  },
  {
    path: 'pharmacy-details/:pharmacyId',
    loadChildren: () => import('./components/pharmacies/pharmacy-details/pharmacy-details.module').then(m => m.PharmacyDetailsModule),

  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
