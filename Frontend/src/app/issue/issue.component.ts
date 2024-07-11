import { Component, OnInit } from '@angular/core';
import { Issue } from './issue';
import { IssueService } from './issue.service'
import { PopupService } from '../issue-update/popup.service';
import { Location } from '@angular/common';
// import { PopupService } from '../issue-update/popup.service';
// import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  title = 'Demo on HttpClientModule';
  issues!: Issue[];
  errorMessage!: string;
  ADD_BOOK!: boolean;
  UPDATE_ISSUE!: boolean;
  DELETE_BOOK!: boolean;
  currentDate : Date = new Date();
  inputDate: Date | undefined;
  selectedData: any;

  data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id :4 },
    { id: 5}
    ];
  newId:number;
  issueClosedDate! : Date;
  issueStatus!: string;
  searchKeyword: string = '';
  newIssueId: string | undefined;
  // newIssueId: string;
  

  
  
  
  
  // book: any;
  // status: any;
  constructor(private issueService: IssueService, private popupService: PopupService, private location: Location) {const lastId = this.data.length > 0 ? this.data[this.data.length - 1].id : 0;
    this.newId = Math.max(lastId + 1, 1);
     this.issueClosedDate = new Date('2023-05-30');
     this.issueStatus = this.issueClosedDate > new Date() ? 'open' : 'closed';
    //  this.issueStatus = Issue.cldt > this.issueClosedDate ? 'open' : 'closed';
   } 

    addNewData() {
      const newData = { id: this.newId };
      this.data.push(newData);
      this.newId++; // Increment the new ID for subsequent additions
      }

  getIssues() {
    this.issueService.getIssues().subscribe({
      next:  issues => this.issues = issues,
      error:error => this.errorMessage = <any>error
    })
  }
  addIssue(issuesId: string, name: string, status:string, desc:string, stdt:string, cldt:string): void {
    let id=parseInt(issuesId)
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
  openPopupIssue(){ 
    this.popupService.openPopupIssue();
  }  
  onButtonClick(){
    this.openPopupIssue();
    this.displayData;
  }
  
  ngOnInit() {
    this.getIssues();
    this.loadIssues();
    this.generateNewIssueId();
  }

  checkStatus(){
    if(Issue.cldt > this.currentDate){
      Issue.status = "closed";
    } else {
      Issue.status = "open";
    }
  }


  goBack(): void {
    this.location.back();
  }

  loadIssues(): Promise<void> {
    return new Promise((resolve) => {
      this.issueService.getIssues().subscribe(data => {
        this.issues = data;
        resolve();
      });
    });
  }

  async search(){
    if(this.searchKeyword.trim() !== ''){
      await this.loadIssues(); //wait for the data to be loaded
      const searchTerm = this.searchKeyword.trim();
      const isNumeric = /^\d+$/.test(searchTerm); //check if the searchterm is a valid number 
      
      if (isNumeric) {
        const searchResult = this.issues.filter(issue => issue.id === parseInt(searchTerm));

        if (searchResult.length > 0) {
          this.issues = searchResult;
        } else {
          this.issues = []; // Handling the case when Id is not found
          // this.issues.push({ id: -1, name:'Not Found', status:'Not', desc: 'ID not found', stdt:'Not', cldt:'Not' });
        }
        // this.issues = this.issues.filter(issue => issue.id.toString().includes(this.searchKeyword.trim()));
      } else {
        this.issues = []; // Handling the case when the search term is not a valid number
        this.issues.push({ id: -1, name:'Not Found', status:'Not', desc: 'Invalid ID', stdt:'Not', cldt:'Not' });
      }
    } else {
      await this.loadIssues(); //if the search keyword is empty, reload all issues
    }
  }

  generateNewIssueId(): void {
    this.issueService.getLatestIssueId().subscribe((LatestIssueId) => {
      const newIdNumber = LatestIssueId + 1;
      this.newIssueId = `IS${newIdNumber.toString().padStart(4, '0')}`;
    });
  }



}
