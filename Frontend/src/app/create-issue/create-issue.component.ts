import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue/issue.service';
import { Issue } from '../issue/issue';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {
  issues!: Issue[];
  errorMessage!: string;
  ADD_BOOK!: boolean;
  UPDATE_BOOK!: boolean;
  DELETE_BOOK!: boolean;
  newId! :number;
  data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id:4, name: 'ar'},
    { id:5, name: 'ar'}
   
    ];  
  // newIssueId= 'IS001';
  // issueList: any[] = [];
  // newIssueId:string = '';
  
  
  
  // book: any;
  // status: any;
  constructor(private issueService: IssueService) { const lastId = this.data.length > 0 ? this.data[this.data.length - 1].id : 0;
    this.newId = Math.max(lastId + 1, 1);}
  addNewData() {
    // Add your logic to add the new data with the new ID
    const newData = { id: this.newId, name: 'New Name' };
    this.data.push(newData);
    // this.issueService.addNewData({id })
    this.newId++; // Increment the new ID for subsequent additions
    
    }
  getIssues() {
    this.issueService.getIssues().subscribe({
      next:  issues => this.issues = issues,
      error:error => this.errorMessage = <any>error
    })
  }
  addIssue(issueId: string, name: string, status:string, desc:string, stdt:string, cldt:string): void {
    let id=parseInt(issueId)
    this.issueService.addIssue({id, name, status, desc, stdt, cldt })
      .subscribe({next:(issue: any) => this.issues.push(issue)});
  }
  updateIssue(issueId: string, name: string, status:string, desc:string, stdt:string, cldt:string): void {
    let id=parseInt(issueId)
    this.issueService.updateIssue({ id, name, status, desc, stdt, cldt })
      .subscribe({next:(issue: any) => this.issues = issue});
  }
  deleteBook(issueId: string): void {
    let id=parseInt(issueId)
    this.issueService.deleteBook(id)
      .subscribe({next:(issue: any) => this.issues = issue});
  } 
  ngOnInit():void {
    this.getIssues();
    // this.generateNewIssueId();
  }

  // generateNewIssueId(): void {
  //   this.issueService.getLatestIssueId().subscribe((LatestIssueId) => {
  //     const newIdNumber = LatestIssueId + 1;
  //     // this.newIssueId = `IS${newIdNumber.toString().padStart(4, '0')}`;
  //   });
  // }

  // generateNewId() {
  //   const lastId = this.issueList.length > 0 ? this.issueList[this.issueList.length - 1].id : 0;
  //   const newId = (lastId + 1).toString().padStart(4, '0');

  //   this.newIssueId = newId;
  // }
  // onCreateNewIssue(){
  //   this.generateNewId();
  // }
}
