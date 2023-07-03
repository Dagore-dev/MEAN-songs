import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import ISong from '../interfaces/ISong'
import { Observable, catchError, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  baseURL = 'http://localhost:3000/api/songs'

  constructor (private readonly http: HttpClient) { }

  getAll (): Observable<ISong[]> {
    return this.http
      .get<ISong[]>(this.baseURL)
      .pipe(catchError(this.handleError))
  }

  getById (songId: string): Observable<ISong> {
    return this.http
      .get<ISong>(`${this.baseURL}/${songId}`)
      .pipe(catchError(this.handleError))
  }

  private handleError (err: HttpErrorResponse): Observable<never> {
    let errorMsg = ''

    if (err.error instanceof ErrorEvent) {
      // Client-side or network error.
      errorMsg = `An error ocurred: ${err.error.message}`
    } else {
      // Unsuccessful response code. Body could contain additional information.
      errorMsg = `Server returned code: ${err.status}, error message is: ${err.message}`
    }

    return throwError(() => errorMsg)
  }
}
