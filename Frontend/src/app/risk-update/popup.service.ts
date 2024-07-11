import { Injectable } from '@angular/core';
import{ MatDialog }from '@angular/material/dialog';
import { RiskUpdateComponent } from './risk-update.component';
import { RiskComponent } from '../risk/risk.component';
import { Risk } from '../risk/risk';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  selectedData: any;
  risks!: Risk[]; 
  isVisible!: boolean;


  constructor(private dialog: MatDialog,private http: HttpClient) { }

  openPopupRisk() {
    this.dialog.open(RiskUpdateComponent, {
      width: '600px',
      height: '500px',

    });
  }
  updateRisk(risk: Risk): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>('http://localhost:3021/updateRis', risk, { headers: options }).pipe(
      tap((_: any) => console.log(`updated hero id=${risk.id}`)),
      catchError(this.handleError)
    );
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
  displayData(id:any){
    this.selectedData = this.risks.find(item =>item.id == id);
  }
  closePopup(): void {
    this.isVisible = false;
  }
  
}
 