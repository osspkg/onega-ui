import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export const API_HOST = new InjectionToken<string>('API_HOST');
export const API_HEADERS = new InjectionToken<Headers | undefined>('API_HEADERS');

export interface Query {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
}

export interface Headers {
  [param: string]: string;
}

@Injectable({
  providedIn: 'root',
  deps: [HttpClient],
})
export class RequestService {
  constructor(
    @Inject(API_HOST) private readonly host: string,
    @Inject(API_HEADERS) private readonly headers: Headers | undefined,
    private readonly http: HttpClient,
  ) {

  }

  get<T>(url: string, args?: Query): Observable<T> {
    return this.http.get<T>(this.host + url, {
      headers: this.headers,
      params: args,
    }).pipe(take(1));
  }

  post<T>(url: string, body: any | null, args?: Query): Observable<T> {
    return this.http.post<T>(this.host + url, body, {
      headers: this.headers,
      params: args,
    }).pipe(take(1));
  }

  put<T>(url: string, body: any | null, args?: Query): Observable<T> {
    return this.http.put<T>(this.host + url, body, {
      headers: this.headers,
      params: args,
    }).pipe(take(1));
  }

  delete<T>(url: string, args?: Query): Observable<T> {
    return this.http.get<T>(this.host + url, {
      headers: this.headers,
      params: args,
    }).pipe(take(1));
  }
}
