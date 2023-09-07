import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export const API_PREFIX = new InjectionToken<string>('API_PREFIX');

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(
    @Inject(API_PREFIX) private readonly prefix: string,
    private http: HttpClient,
  ) {
    this.prefix = this._trimChar(this.prefix, '/') + '/';
  }

  get<T>(url: string, data?: object): Observable<T> {
    return this._observable<T>(
      this.http.get<T>(this._query(this._uri(url), data), {
        headers: this._headers(data),
      }),
    );
  }

  post<T>(url: string, data: object): Observable<T> {
    return this._observable<T>(
      this.http.post<T>(this._uri(url), data, {
        headers: this._headers(data),
      }),
    );
  }

  put<T>(url: string, data: object): Observable<T> {
    return this._observable<T>(
      this.http.put<T>(this._uri(url), data, { headers: this._headers(data) }),
    );
  }

  delete<T>(url: string, data?: object): Observable<T> {
    return this._observable<T>(
      this.http.delete<T>(this._query(this._uri(url), data), {
        headers: this._headers(data),
      }),
    );
  }

  private _uri(v: string): string {
    return this.prefix + this._trimChar(v, '/');
  }

  private _observable<T>(obs: Observable<T>): Observable<T> {
    return obs.pipe(take(1));
  }

  private _query(url: string, data?: object): string {
    const str: string[] = [];
    for (const [key, value] of Object.entries(data || {})) {
      if (Array.isArray(value)) {
        Array.from(value).forEach((v, i) => {
          str.push(`${key}[${i}]=${encodeURIComponent(v)}`);
        });
      } else {
        str.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
    if (str.length > 0) {
      url = `${url}?${str.join('&')}`;
    }
    return url;
  }

  private _headers(body: unknown): HttpHeaders {
    let head = new HttpHeaders();
    if (body instanceof FormData) {
      head = head.set('Content-Type', 'multipart/form-data');
    } else {
      head = head.set('Content-Type', 'application/json');
    }
    return head;
  }

  private _trimChar(v: string, ch: string): string {
    let start = 0,
      end = v.length;

    while (start < end && v[start] === ch) ++start;
    while (end > start && v[end - 1] === ch) --end;
    return start > 0 || end < v.length ? v.substring(start, end) : v;
  }
}
