/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ReservedSlotDTO } from '../models/reserved-slot-dto';
import { AddressLineDTO } from '../models/address-line-dto';
import { Appointment } from '../models/appointment';
import { Doctor } from '../models/doctor';
import { TestDate } from '../models/test-date';
import { RatingReview } from '../models/rating-review';
import { Review } from '../models/review';
import { GoogleMedicalNews } from '../models/google-medical-news';
import { WorkPlace } from '../models/work-place';
import { Patient } from '../models/patient';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findSlotsUsingGETPath = '/api/Dr-slots/{date}/{doctorId}';
  static readonly getAllAddressLinesByPatientIdUsingGETPath = '/api/address-linesByPatientId/{patientId}';
  static readonly findAppointmentByTrackingIdUsingGETPath = '/api/appointments/findByTrackingId/{trackingId}';
  static readonly findDoctorsUsingGETPath = '/api/doctor/{searchTerm}';
  static readonly findDoctorByDoctorIdUsingGETPath = '/api/doctors/{doctorId}';
  static readonly facetSearchUsingGETPath = '/api/facetSearch/{specialization}/{rating}/{feeFrom}/{feeTo}';
  static readonly findAllDatesUsingGETPath = '/api/findAllDates';
  static readonly findAllDoctorsUsingGETPath = '/api/findAllDoctors';
  static readonly findAllQualificationUsingGETPath = '/api/findAllQualification';
  static readonly findRatingReviewByStoreidAndCustomerNameUsingGETPath = '/api/findRatingReview/{doctorId}';
  static readonly findReviewByDoctorIdUsingGETPath = '/api/findReviewByDoctorId/{doctorId}';
  static readonly getMedicalNewsUsingGETPath = '/api/googleMedicalNews';
  static readonly searchByNearestLocationUsingGETPath = '/api/location/findByNearestLocation/{latLon}/{kiloMeter}';
  static readonly findPatientUsingGETPath = '/api/patient/{patientCode}';
  static readonly test2UsingGETPath = '/api/test2/{date}/{doctorId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `QueryResourceService.FindSlotsUsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  findSlotsUsingGETResponse(params: QueryResourceService.FindSlotsUsingGETParams): __Observable<__StrictHttpResponse<Array<ReservedSlotDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Dr-slots/${params.date}/${params.doctorId}`,
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
   * @param params The `QueryResourceService.FindSlotsUsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  findSlotsUsingGET(params: QueryResourceService.FindSlotsUsingGETParams): __Observable<Array<ReservedSlotDTO>> {
    return this.findSlotsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ReservedSlotDTO>)
    );
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
   * @param trackingId trackingId
   * @return OK
   */
  findAppointmentByTrackingIdUsingGETResponse(trackingId: string): __Observable<__StrictHttpResponse<Appointment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/appointments/findByTrackingId/${trackingId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Appointment>;
      })
    );
  }
  /**
   * @param trackingId trackingId
   * @return OK
   */
  findAppointmentByTrackingIdUsingGET(trackingId: string): __Observable<Appointment> {
    return this.findAppointmentByTrackingIdUsingGETResponse(trackingId).pipe(
      __map(_r => _r.body as Appointment)
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
   * @param params The `QueryResourceService.FindAllDatesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllDatesUsingGETResponse(params: QueryResourceService.FindAllDatesUsingGETParams): __Observable<__StrictHttpResponse<Array<TestDate>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findAllDates`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TestDate>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllDatesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllDatesUsingGET(params: QueryResourceService.FindAllDatesUsingGETParams): __Observable<Array<TestDate>> {
    return this.findAllDatesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<TestDate>)
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
   * @param params The `QueryResourceService.FindRatingReviewByStoreidAndCustomerNameUsingGETParams` containing the following parameters:
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
  findRatingReviewByStoreidAndCustomerNameUsingGETResponse(params: QueryResourceService.FindRatingReviewByStoreidAndCustomerNameUsingGETParams): __Observable<__StrictHttpResponse<Array<RatingReview>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findRatingReview/${params.doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RatingReview>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindRatingReviewByStoreidAndCustomerNameUsingGETParams` containing the following parameters:
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
  findRatingReviewByStoreidAndCustomerNameUsingGET(params: QueryResourceService.FindRatingReviewByStoreidAndCustomerNameUsingGETParams): __Observable<Array<RatingReview>> {
    return this.findRatingReviewByStoreidAndCustomerNameUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<RatingReview>)
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
   * @return OK
   */
  getMedicalNewsUsingGETResponse(): __Observable<__StrictHttpResponse<GoogleMedicalNews>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/googleMedicalNews`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GoogleMedicalNews>;
      })
    );
  }
  /**
   * @return OK
   */
  getMedicalNewsUsingGET(): __Observable<GoogleMedicalNews> {
    return this.getMedicalNewsUsingGETResponse().pipe(
      __map(_r => _r.body as GoogleMedicalNews)
    );
  }

  /**
   * @param params The `QueryResourceService.SearchByNearestLocationUsingGETParams` containing the following parameters:
   *
   * - `latLon`: latLon
   *
   * - `kiloMeter`: kiloMeter
   *
   * @return OK
   */
  searchByNearestLocationUsingGETResponse(params: QueryResourceService.SearchByNearestLocationUsingGETParams): __Observable<__StrictHttpResponse<Array<WorkPlace>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/location/findByNearestLocation/${params.latLon}/${params.kiloMeter}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<WorkPlace>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.SearchByNearestLocationUsingGETParams` containing the following parameters:
   *
   * - `latLon`: latLon
   *
   * - `kiloMeter`: kiloMeter
   *
   * @return OK
   */
  searchByNearestLocationUsingGET(params: QueryResourceService.SearchByNearestLocationUsingGETParams): __Observable<Array<WorkPlace>> {
    return this.searchByNearestLocationUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<WorkPlace>)
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
   * @param params The `QueryResourceService.Test2UsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  test2UsingGETResponse(params: QueryResourceService.Test2UsingGETParams): __Observable<__StrictHttpResponse<Array<ReservedSlotDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/test2/${params.date}/${params.doctorId}`,
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
   * @param params The `QueryResourceService.Test2UsingGETParams` containing the following parameters:
   *
   * - `doctorId`: doctorId
   *
   * - `date`: date
   *
   * @return OK
   */
  test2UsingGET(params: QueryResourceService.Test2UsingGETParams): __Observable<Array<ReservedSlotDTO>> {
    return this.test2UsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ReservedSlotDTO>)
    );
  }
}

module QueryResourceService {

  /**
   * Parameters for findSlotsUsingGET
   */
  export interface FindSlotsUsingGETParams {

    /**
     * doctorId
     */
    doctorId: number;

    /**
     * date
     */
    date: string;
  }

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
   * Parameters for findAllDatesUsingGET
   */
  export interface FindAllDatesUsingGETParams {

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
   * Parameters for findRatingReviewByStoreidAndCustomerNameUsingGET
   */
  export interface FindRatingReviewByStoreidAndCustomerNameUsingGETParams {

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
   * Parameters for searchByNearestLocationUsingGET
   */
  export interface SearchByNearestLocationUsingGETParams {

    /**
     * latLon
     */
    latLon: string;

    /**
     * kiloMeter
     */
    kiloMeter: number;
  }

  /**
   * Parameters for test2UsingGET
   */
  export interface Test2UsingGETParams {

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
