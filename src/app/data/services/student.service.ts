import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Student } from '../schemas/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  basePath = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(httpErrorResponse: HttpErrorResponse): Observable<any> {
    if (httpErrorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpErrorResponse.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${httpErrorResponse.status}, ` +
        `body was: ${httpErrorResponse.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  create(student: Student): Observable<Student> {
    return this.http
      .post<Student>(this.basePath, JSON.stringify(student), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  findById(id: number): Observable<Student> {
    return this.http
      .get<Student>(this.basePath + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  getList(): Observable<Student> {
    return this.http
      .get<Student>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: number, student: Student): Observable<Student> {
    return this.http
      .put<Student>(this.basePath + '/' + id, JSON.stringify(student), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: number): Observable<Student> {
    return this.http
      .delete<Student>(this.basePath + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
