import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Team } from '../schemas/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  basePath = 'http://localhost:3000/teams';

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

  create(team: Team): Observable<Team> {
    return this.http
      .post<Team>(this.basePath, JSON.stringify(team), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  findById(id: number): Observable<Team> {
    return this.http
      .get<Team>(this.basePath + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  getList(): Observable<Team> {
    return this.http
      .get<Team>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: number, Team: Team): Observable<Team> {
    return this.http
      .put<Team>(this.basePath + '/' + id, JSON.stringify(Team), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: number): Observable<Team> {
    return this.http
      .delete<Team>(this.basePath + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
