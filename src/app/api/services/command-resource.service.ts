/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserRatingDTO } from '../models/user-rating-dto';
import { ReviewDTO } from '../models/review-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly ratedoctorUsingPOSTPath = '/api/rating';
  static readonly reviewdoctorUsingPOSTPath = '/api/review';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param userRatingDTO userRatingDTO
   */
  ratedoctorUsingPOSTResponse(userRatingDTO: UserRatingDTO): __Observable<__StrictHttpResponse<null>> {
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
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param userRatingDTO userRatingDTO
   */
  ratedoctorUsingPOST(userRatingDTO: UserRatingDTO): __Observable<null> {
    return this.ratedoctorUsingPOSTResponse(userRatingDTO).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param reviewDTO reviewDTO
   */
  reviewdoctorUsingPOSTResponse(reviewDTO: ReviewDTO): __Observable<__StrictHttpResponse<null>> {
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
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param reviewDTO reviewDTO
   */
  reviewdoctorUsingPOST(reviewDTO: ReviewDTO): __Observable<null> {
    return this.reviewdoctorUsingPOSTResponse(reviewDTO).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CommandResourceService {
}

export { CommandResourceService }
