
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize, tap } from 'rxjs/operators';
import { HttpMethodsTypeEnum } from 'src/utility/constants';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class HttpHelperService {

    constructor(
        protected http: HttpClient) {
    }

    protected httpHelperMethod(methodType: HttpMethodsTypeEnum, url: string) {
        return this.apiCall(methodType, url)
            .pipe(
                tap((response: any) => {
                    return response || {};
                }),
                catchError(
                    this.handleError('', [])
                ),
                finalize(() => {
                    // we can set loader to falsehere
                })
            );
    }

    private apiCall(methodType: HttpMethodsTypeEnum, url: string): Observable<any> {
        switch (methodType) {
            case HttpMethodsTypeEnum.GET:
                return this.http.get<any>(url);
                break;

            case HttpMethodsTypeEnum.POST:
                return this.http.post<any>(url, {});
                break;
        }
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            // console.error(error); // log to console instead
            return throwError(error);
        };
    }


}
