import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Risk } from './risk';

@Injectable({
    providedIn:'root'
})
export class RiskService {
  risksUrl = 'http://localhost:3021/riskList';
  constructor(private http: HttpClient) { }
  getRisks(): Observable<Risk[]> {
    return this.http.get<Risk[]>('http://localhost:3021/riskList').pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
  }
  addRisk(risk: Risk): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3021/addRisk', risk, { headers: options }).pipe(
      catchError(this.handleError));
  }
  updateRisk(risk: Risk): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>('http://localhost:3021/updateRis', risk, { headers: options }).pipe(
      tap((_: any) => console.log(`updated hero id=${risk.id}`)),
      catchError(this.handleError)
    );
  }
  deleteBook(riskId: number): Observable<any> {
    const url = `${this.risksUrl}/${riskId}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(()=>errMsg);
  }
}
