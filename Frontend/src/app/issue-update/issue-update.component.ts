import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue/issue.service';
import { Issue } from '../issue/issue';

@Component({
  selector: 'app-issue-update',
  templateUrl: './issue-update.component.html',
  styleUrls: ['./issue-update.component.css']
})
export class IssueUpdateComponent implements OnInit {
  issues!: Issue[];
  errorMessage!: string;
  ADD_BOOK!: boolean;
  UPDATE_BOOK!: boolean;
  DELETE_BOOK!: boolean;
  selectedData!: any;
  isVisible!: boolean;
  selectedIssue: {id:string, title:string}={id:'fgb',title:'er'};
  
  
  
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
  // displayData(id:any){
  //   this.selectedData = this.issues.find(item =>item.id == id);
  // }
  refreshPage(): void {
    window.location.reload();
  }

  onClickIssue(issue: {id:string, title:string}):void{
    this.selectedIssue = { id:'',title:''};
    this.selectedIssue = { ...issue };
  }
  ngOnInit() {
    this.getIssues();
  }

}
