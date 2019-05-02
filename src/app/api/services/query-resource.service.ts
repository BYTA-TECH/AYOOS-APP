/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Doctor } from '../models/doctor';
import { PageOfDoctor } from '../models/page-of-doctor';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findDoctorUsingGETPath = '/api/doctor/{searchTerm}';
  static readonly facetSearchUsingGETPath = '/api/facetSearch/{specialization}/{rating}/{feeFrom}/{feeTo}';
  static readonly findAllDoctorsUsingGETPath = '/api/findAllDoctors';
  static readonly findAllQualificationUsingGETPath = '/api/findAllQualification';
  static readonly searchByLocationUsingGETPath = '/api/findByLocationWithin';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param searchTerm searchTerm
   * @return OK
   */
  findDoctorUsingGETResponse(searchTerm: string): __Observable<__StrictHttpResponse<Doctor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/doctor/${searchTerm}`,
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
   * @param searchTerm searchTerm
   * @return OK
   */
  findDoctorUsingGET(searchTerm: string): __Observable<Doctor> {
    return this.findDoctorUsingGETResponse(searchTerm).pipe(
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
  facetSearchUsingGETResponse(params: QueryResourceService.FacetSearchUsingGETParams): __Observable<__StrictHttpResponse<PageOfDoctor>> {
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
        return _r as __StrictHttpResponse<PageOfDoctor>;
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
  facetSearchUsingGET(params: QueryResourceService.FacetSearchUsingGETParams): __Observable<PageOfDoctor> {
    return this.facetSearchUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfDoctor)
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
  findAllDoctorsUsingGETResponse(params: QueryResourceService.FindAllDoctorsUsingGETParams): __Observable<__StrictHttpResponse<PageOfDoctor>> {
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
        return _r as __StrictHttpResponse<PageOfDoctor>;
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
  findAllDoctorsUsingGET(params: QueryResourceService.FindAllDoctorsUsingGETParams): __Observable<PageOfDoctor> {
    return this.findAllDoctorsUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfDoctor)
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
  searchByLocationUsingGETResponse(params: QueryResourceService.SearchByLocationUsingGETParams): __Observable<__StrictHttpResponse<PageOfDoctor>> {
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
        return _r as __StrictHttpResponse<PageOfDoctor>;
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
  searchByLocationUsingGET(params: QueryResourceService.SearchByLocationUsingGETParams): __Observable<PageOfDoctor> {
    return this.searchByLocationUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfDoctor)
    );
  }
}

module QueryResourceService {

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
}

export { QueryResourceService }
