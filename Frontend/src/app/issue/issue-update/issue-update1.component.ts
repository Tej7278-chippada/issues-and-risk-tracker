import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';
import { IssueComponent } from '../issue.component';


@Component({
  selector: 'app-issue-update1',
  templateUrl: './issue-update1.component.html',
  styleUrls: ['./issue-update1.component.css']
})
export class IssueUpdate1Component implements OnInit {
  issues!: Issue[];
  errorMessage!: string;
  ADD_BOOK!: boolean;
  UPDATE_ISSUE!: boolean;
  DELETE_BOOK!: boolean;
  selectedData!: any;
  
  
  
  // book: any;
  // status: any;
  constructor(private issueService: IssueService) { }
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
  displayData(id:any){
    this.selectedData = this.issues.find(item =>item.id == id);
  }
  ngOnInit() {
    this.getIssues();
  }

}
