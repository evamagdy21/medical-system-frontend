import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UaeService {
  // node/express api

  Rest_API: string = 'https://medicalsystem.herokuapp.com/uae';
  // Rest_API: string = 'http://localhost:3000/uae';
  // http headers
  httpHeaders = new HttpHeaders().set('content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }
  // GET uae DATA
  getUaeData(): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}`);
  }
  // GET all hospitals DATA
  getHospitalsData(): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}/hospitals`);
  }
  // get hospitals details
  getHospitalsDetails(hospitalId): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}/hospitals/${hospitalId}`);
  }
  // GET all insurance companies DATA
  getInsuranceData(): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}/insurance-companies`);
  }
  // get Insurance companies Details
  getInsuranceDetails(insurancelId): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}/insurance-companies/${insurancelId}`);
  }
  // GET all pharmacies DATA
  getPharmacyeData(): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}/pharmacies`);
  }
  // get pharmacy Details
  getPharmacyDetails(pharmacyId): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}/pharmacies/${pharmacyId}`);
  }
}
