import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private SERVER = 'https://reqres.in/api/register';

  constructor(private httpClient: HttpClient) {}

  public fetchData() {
    return this.httpClient
      // I am already making some request which provides some error
      .post(this.SERVER, {
        email: 'sydney@fife',
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.log('Error');
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
