/**
 *
 * Author: Tarang Sachdev.
 * Date: June 01 2019 12:30 AM
 * Copyright @ 2019 Tarang Sachdev
 *
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHelperService } from './http-helper.service';
import { HttpMethodsTypeEnum } from 'src/utility/constants';
@Injectable({
  providedIn: 'root'
})
export class APIManager extends HttpHelperService {

  constructor(http: HttpClient) {
    super(http);
  }

  get Content_Type_Json_HttpOptions() {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { headers: httpOptions };
  }


  override httpHelperMethod(methodType: HttpMethodsTypeEnum, url: string): Observable<any> {
    return super.httpHelperMethod(methodType, url);
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

}
