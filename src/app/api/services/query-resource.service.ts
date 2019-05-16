/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AddressLineDTO } from '../models/address-line-dto';
import { Doctor } from '../models/doctor';
import { Review } from '../models/review';
import { Patient } from '../models/patient';
import { ReservedSlotDTO } from '../models/reserved-slot-dto';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly getAllAddressLinesByPatientIdUsingGETPath = '/api/address-linesByPatientId/{patientId}';
  static readonly findDoctorsUsingGETPath = '/api/doctor/{searchTerm}';
  static readonly findDoctorByDoctorIdUsingGETPath = '/api/doctors/{doctorId}';
  static readonly facetSearchUsingGETPath = '/api/facetSearch/{specialization}/{rating}/{feeFrom}/{feeTo}';
  static readonly findAllDoctorsUsingGETPath = '/api/findAllDoctors';
  static readonly findAllQualificationUsingGETPath = '/api/findAllQualification';
  static readonly searchByLocationUsingGETPath = '/api/findByLocationWithin';
  static readonly findReviewByDoctorIdUsingGETPath = '/api/findReviewByDoctorId/{doctorId}';
  static readonly findPatientUsingGETPath = '/api/patient/{patientCode}';
  static readonly createSlotUsingGETPath = '/api/slot/{date}/{doctorId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param patientId patientId
   * @return OK
   */
  getAllAddressLinesByPatientIdUsingGETResponse(patientId: number): __Observable<__StrictHttpResponse<Array<AddressLineDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/address-linesByPatientId/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AddressLineDTO>>;
      })
    );
  }
  /**
   * @param patientId patientId
   * @return OK
   */
  getAllAddressLinesByPatientIdUsingGET(patientId: number): __Observable<Array<AddressLineDTO>> {
    return this.getAllAddressLinesByPatientIdUsingGETResponse(patientId).pipe(
      __map(_r => _r.body as Array<AddressLineDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindDoctorsUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findDoctorsUsingGETResponse(params: QueryResourceService.FindDoctorsUsingGETParams): __Observable<__StrictHttpResponse<Array<Doctor>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/doctor/${params.searchTerm}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Doctor>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindDoctorsUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findDoctorsUsingGET(params: QueryResourceService.FindDoctorsUsingGETParams): __Observable<Array<Doctor>> {
    return this.findDoctorsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Doctor>)
    );
  }

  /**
   * @param doctorId doctorId
   * @return OK
   */
  findDoctorByDoctorIdUsingGETResponse(doctorId: string): __Observable<__StrictHttpResponse<Doctor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/doctors/${doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Doctor>;
      })
    );
  }
  /**
   * @param doctorId doctorId
   * @return OK
   */
  findDoctorByDoctorIdUsingGET(doctorId: string): __Observable<Doctor> {
    return this.findDoctorByDoctorIdUsingGETResponse(doctorId).pipe(
      __map(_r => _r.body as Doctor)
    );
  }

  /**
   * @param params The `QueryResourceService.FacetSearchUsingGETParams` containing the following parameters:
   *
   * - `specialization`: specialization
   *
   * - `rating`: rating
   *
   * - `feeTo`: feeTo
   *
   * - `feeFrom`: feeFrom
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  facetSearchUsingGETResponse(params: QueryResourceService.FacetSearchUsingGETParams): __Observable<__StrictHttpResponse<Array<Doctor>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/facetSearch/${params.specialization}/${params.rating}/${params.feeFrom}/${params.feeTo}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Doctor>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FacetSearchUsingGETParams` containing the following parameters:
   *
   * - `specialization`: specialization
   *
   * - `rating`: rating
   *
   * - `feeTo`: feeTo
   *
   * - `feeFrom`: feeFrom
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  facetSearchUsingGET(params: QueryResourceService.FacetSearchUsingGETParams): __Observable<Array<Doctor>> {
    return this.facetSearchUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Doctor>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllDoctorsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllDoctorsUsingGETResponse(params: QueryResourceService.FindAllDoctorsUsingGETParams): __Observable<__StrictHttpResponse<Array<Doctor>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findAllDoctors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Doctor>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllDoctorsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllDoctorsUsingGET(params: QueryResourceService.FindAllDoctorsUsingGETParams): __Observable<Array<Doctor>> {
    return this.findAllDoctorsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Doctor>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllQualificationUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllQualificationUsingGETResponse(params: QueryResourceService.FindAllQualificationUsingGETParams): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findAllQualification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllQualificationUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllQualificationUsingGET(params: QueryResourceService.FindAllQualificationUsingGETParams): __Observable<Array<string>> {
    return this.findAllQualificationUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param params The `QueryResourceService.SearchByLocationUsingGETParams` containing the following parameters:
   *
   * - `location`: location
   *
   * - `distance`: distance
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchByLocationUsingGETResponse(params: QueryResourceService.SearchByLocationUsingGETParams): __Observable<__StrictHttpResponse<Array<Doctor>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.location || []).forEach(val => {if (val != null) __params = __params.append('location', val.toString())});
    if (params.distance != null) __params = __params.set('distance', params.distance.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findByLocationWithin`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Doctor>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.SearchByLocationUsingGETParams` containing the following parameters:
   *
   * - `location`: location
   *
   * - `distance`: distance
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchByLocationUsingGET(params: QueryResourceService.SearchByLocationUsingGETParams): __Observable<Array<Doctor>> {
    return this.searchByLocationUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Doctor>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindReviewByDoctorIdUsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findReviewByDoctorIdUsingGETResponse(params: QueryResourceService.FindReviewByDoctorIdUsingGETParams): __Observable<__StrictHttpResponse<Array<Review>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findReviewByDoctorId/${params.doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Review>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindReviewByDoctorIdUsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findReviewByDoctorIdUsingGET(params: QueryResourceService.FindReviewByDoctorIdUsingGETParams): __Observable<Array<Review>> {
    return this.findReviewByDoctorIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Review>)
    );
  }

  /**
   * @param patientCode patientCode
   * @return OK
   */
  findPatientUsingGETResponse(patientCode: string): __Observable<__StrictHttpResponse<Patient>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/patient/${patientCode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Patient>;
      })
    );
  }
  /**
   * @param patientCode patientCode
   * @return OK
   */
  findPatientUsingGET(patientCode: string): __Observable<Patient> {
    return this.findPatientUsingGETResponse(patientCode).pipe(
      __map(_r => _r.body as Patient)
    );
  }

  /**
   * @param params The `QueryResourceService.CreateSlotUsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  createSlotUsingGETResponse(params: QueryResourceService.CreateSlotUsingGETParams): __Observable<__StrictHttpResponse<Array<ReservedSlotDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/slot/${params.date}/${params.doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReservedSlotDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.CreateSlotUsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  createSlotUsingGET(params: QueryResourceService.CreateSlotUsingGETParams): __Observable<Array<ReservedSlotDTO>> {
    return this.createSlotUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ReservedSlotDTO>)
    );
  }
}

module QueryResourceService {

  /**
   * Parameters for findDoctorsUsingGET
   */
  export interface FindDoctorsUsingGETParams {

    /**
     * searchTerm
     */
    searchTerm: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for facetSearchUsingGET
   */
  export interface FacetSearchUsingGETParams {

    /**
     * specialization
     */
    specialization: string;

    /**
     * rating
     */
    rating: number;

    /**
     * feeTo
     */
    feeTo: number;

    /**
     * feeFrom
     */
    feeFrom: number;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllDoctorsUsingGET
   */
  export interface FindAllDoctorsUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllQualificationUsingGET
   */
  export interface FindAllQualificationUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for searchByLocationUsingGET
   */
  export interface SearchByLocationUsingGETParams {

    /**
     * location
     */
    location: Array<number>;

    /**
     * distance
     */
    distance: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findReviewByDoctorIdUsingGET
   */
  export interface FindReviewByDoctorIdUsingGETParams {

    /**
     * doctorId
     */
    doctorId: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for createSlotUsingGET
   */
  export interface CreateSlotUsingGETParams {

    /**
     * doctorId
     */
    doctorId: number;

    /**
     * date
     */
    date: string;
  }
}

export { QueryResourceService }
