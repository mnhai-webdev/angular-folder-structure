import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../schemas/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basePath = 'http://localhost:3000/users';

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

  create(user: User): Observable<User> {
    return this.http
      .post<User>(this.basePath, JSON.stringify(user), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  findById(id: number): Observable<User> {
    return this.http
      .get<User>(this.basePath + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  getList(): Observable<User[]> {
    return this.http
      .get<User>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: number, user: User): Observable<User> {
    return this.http
      .put<User>(this.basePath + '/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: number): Observable<User> {
    return this.http
      .delete<User>(this.basePath + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
