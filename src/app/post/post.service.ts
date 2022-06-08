import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from './model/model.post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseURL: string = 'https://bocelli-app.herokuapp.com/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }


  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {

    return this.httpClient.get(this.baseURL + '/post/')

      .pipe(
        catchError(this.errorHandler)
      )
  };

  /**
   * Write code on Method
   *
   * @return response()
   */
  create(post: Post): Observable<any> {

    return this.httpClient.post(this.baseURL + '/post/', JSON.stringify(post), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  };

  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id: string): Observable<any> {
    
    return this.httpClient.get(this.baseURL + '/post/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  };

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id: string, post: Post): Observable<any> {

    return this.httpClient.put(this.baseURL + '/post/' + id, JSON.stringify(post), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  };

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id: string) {
    return this.httpClient.delete(this.baseURL + '/post/' + id, this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  };

  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  };
};
