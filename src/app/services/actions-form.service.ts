import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ActionsFormService {
  baseURL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  addAction(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseURL + 'people', body, { headers: headers });
  }
}
