import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Issue } from './issue';


@Injectable({
    providedIn:'root'
})
export class IssueService {
  
  issuesUrl = 'http://localhost:3020/issueList';
  // selectedData: any;
  newId! :number;
  data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id:4, name: 'ar'},
    { id:5, name: 'ar'}
   
    ]; 
  
  constructor(private http: HttpClient) { const lastId = this.data.length > 0 ? this.data[this.data.length - 1].id : 0;
    this.newId = Math.max(lastId + 1, 1);}
  addNewData() {
    // Add your logic to add the new data with the new ID
    const newData = { id: this.newId, name: 'New Name' };
    this.data.push(newData);
    // this.issueService.addNewData({id })
    this.newId++; // Increment the new ID for subsequent additions
    
    }
  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>('http://localhost:3020/issueList').pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
  }
  addIssue(issue: Issue): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3020/addIssue', issue, { headers: options }).pipe(
      catchError(this.handleError));
  }
  updateIssue(issue: Issue): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>('http://localhost:3020/updateIss', issue, { headers: options }).pipe(
      tap((_: any) => console.log(`updated hero id=${issue.id}`)),
      catchError(this.handleError)
    );
  }
  deleteBook(issueId: number): Observable<any> {
    const url = `${this.issuesUrl}/${issueId}`;
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
  // setSelectedData(id : any) {
  //   this.selectedData = id;
  // }
  getLatestIssueId(): Observable<number> {
    return this.http.get<number>(`${this.issuesUrl}/getLatestIssueId`).pipe(catchError(this.handleError));

  }



}
