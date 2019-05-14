/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AddressLineDTO } from '../models/address-line-dto';
import { PatientDTO } from '../models/patient-dto';
import { UserRatingDTO } from '../models/user-rating-dto';
import { ReviewDTO } from '../models/review-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly createAddressLineUsingPOSTPath = '/api/address-lines';
  static readonly updateAddressLineUsingPUTPath = '/api/address-lines';
  static readonly createPatientUsingPOSTPath = '/api/patients';
  static readonly updatePatientUsingPUTPath = '/api/patients';
  static readonly ratedoctorUsingPOSTPath = '/api/rating';
  static readonly reviewdoctorUsingPOSTPath = '/api/review';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param addressLineDTO addressLineDTO
   * @return OK
   */
  createAddressLineUsingPOSTResponse(addressLineDTO: AddressLineDTO): __Observable<__StrictHttpResponse<AddressLineDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = addressLineDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/address-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AddressLineDTO>;
      })
    );
  }
  /**
   * @param addressLineDTO addressLineDTO
   * @return OK
   */
  createAddressLineUsingPOST(addressLineDTO: AddressLineDTO): __Observable<AddressLineDTO> {
    return this.createAddressLineUsingPOSTResponse(addressLineDTO).pipe(
      __map(_r => _r.body as AddressLineDTO)
    );
  }

  /**
   * @param addressLineDTO addressLineDTO
   * @return OK
   */
  updateAddressLineUsingPUTResponse(addressLineDTO: AddressLineDTO): __Observable<__StrictHttpResponse<AddressLineDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = addressLineDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/address-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AddressLineDTO>;
      })
    );
  }
  /**
   * @param addressLineDTO addressLineDTO
   * @return OK
   */
  updateAddressLineUsingPUT(addressLineDTO: AddressLineDTO): __Observable<AddressLineDTO> {
    return this.updateAddressLineUsingPUTResponse(addressLineDTO).pipe(
      __map(_r => _r.body as AddressLineDTO)
    );
  }

  /**
   * @param patientDTO patientDTO
   * @return OK
   */
  createPatientUsingPOSTResponse(patientDTO: PatientDTO): __Observable<__StrictHttpResponse<PatientDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = patientDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/patients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatientDTO>;
      })
    );
  }
  /**
   * @param patientDTO patientDTO
   * @return OK
   */
  createPatientUsingPOST(patientDTO: PatientDTO): __Observable<PatientDTO> {
    return this.createPatientUsingPOSTResponse(patientDTO).pipe(
      __map(_r => _r.body as PatientDTO)
    );
  }

  /**
   * @param patientDTO patientDTO
   * @return OK
   */
  updatePatientUsingPUTResponse(patientDTO: PatientDTO): __Observable<__StrictHttpResponse<PatientDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = patientDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/patients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatientDTO>;
      })
    );
  }
  /**
   * @param patientDTO patientDTO
   * @return OK
   */
  updatePatientUsingPUT(patientDTO: PatientDTO): __Observable<PatientDTO> {
    return this.updatePatientUsingPUTResponse(patientDTO).pipe(
      __map(_r => _r.body as PatientDTO)
    );
  }

  /**
   * @param userRatingDTO userRatingDTO
   * @return OK
   */
  ratedoctorUsingPOSTResponse(userRatingDTO: UserRatingDTO): __Observable<__StrictHttpResponse<UserRatingDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userRatingDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/rating`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserRatingDTO>;
      })
    );
  }
  /**
   * @param userRatingDTO userRatingDTO
   * @return OK
   */
  ratedoctorUsingPOST(userRatingDTO: UserRatingDTO): __Observable<UserRatingDTO> {
    return this.ratedoctorUsingPOSTResponse(userRatingDTO).pipe(
      __map(_r => _r.body as UserRatingDTO)
    );
  }

  /**
   * @param reviewDTO reviewDTO
   * @return OK
   */
  reviewdoctorUsingPOSTResponse(reviewDTO: ReviewDTO): __Observable<__StrictHttpResponse<ReviewDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = reviewDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/review`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReviewDTO>;
      })
    );
  }
  /**
   * @param reviewDTO reviewDTO
   * @return OK
   */
  reviewdoctorUsingPOST(reviewDTO: ReviewDTO): __Observable<ReviewDTO> {
    return this.reviewdoctorUsingPOSTResponse(reviewDTO).pipe(
      __map(_r => _r.body as ReviewDTO)
    );
  }
}

module CommandResourceService {
}

export { CommandResourceService }
