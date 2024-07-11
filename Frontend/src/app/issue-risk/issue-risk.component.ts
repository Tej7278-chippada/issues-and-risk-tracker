import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-risk',
  templateUrl: './issue-risk.component.html',
  styleUrls: ['./issue-risk.component.css']
})
export class IssueRiskComponent implements OnInit {

  searchText: string = '';
  data = ["Apple","Banana", "Orange", "grapes","Mango"];
  filteredData : string[] = [];

  constructor() { }

  onSearch(){
    this.filteredData = this.data.filter(item => 
      item.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  ngOnInit(): void {
  }

}
