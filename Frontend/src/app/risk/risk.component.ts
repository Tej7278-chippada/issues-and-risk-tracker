import { Component, OnInit } from '@angular/core';
import { Risk } from './risk';
import { RiskService } from './risk.service'
import { PopupService } from '../risk-update/popup.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-Risk',
  templateUrl: './Risk.component.html',
  styleUrls: ['./Risk.component.css']
})
export class RiskComponent implements OnInit {
  title = 'Demo on HttpClientModule';
  risks!: Risk[];
  errorMessage!: string;
  ADD_BOOK!: boolean;
  UPDATE_RISK!: boolean;
  DELETE_BOOK!: boolean;
  currentDate : Date = new Date();
  inputDate: Date | undefined;
  selectedData: any;
  searchKeyword: string = '';
  
  
  // book: any;
  // status: any;
  constructor(private riskService: RiskService, private popupService: PopupService, private location: Location) { }
  getRisks() {
    this.riskService.getRisks().subscribe({
      next:  risks => this.risks = risks,
      error:error => this.errorMessage = <any>error
    })
  }
  addRisk(risksId: string, name: string, status:string, desc:string, stdt:string, cldt:string, reason:string): void {
    let id=parseInt(risksId)
    this.riskService.addRisk({id, name, status, desc, stdt, cldt, reason })
      .subscribe({next:(risk: any) => this.risks.push(risk)});
  }
  updateRisk(riskId: string, name: string, status:string, desc:string, stdt:string, cldt:string, reason:string): void {
    let id=parseInt(riskId)
    this.riskService.updateRisk({ id, name, status, desc, stdt, cldt, reason })
      .subscribe({next:(risk: any) => this.risks = risk});
  }
  deleteBook(riskId: string): void {
    let id=parseInt(riskId)
    this.riskService.deleteBook(id)
      .subscribe({next:(risk: any) => this.risks = risk});
  } 
  
  displayData(id:any){
    this.selectedData = this.risks.find(item =>item.id == id);
  }
  openPopupRisk(){
    this.popupService.openPopupRisk();
  }

  

  onButtonClick(){
    this.openPopupRisk();
    this.displayData;

  }




  ngOnInit() {
    this.getRisks();
  }
  checkStatus(){
    if(Risk.cldt > this.currentDate){
      Risk.status = "closed";
    } else {
      Risk.status = "open";
    }
  }

  goBack(): void {
    this.location.back();
  }

  loadRisks(): Promise<void> {
    return new Promise((resolve) => {
      this.riskService.getRisks().subscribe(data => {
        this.risks = data;
        resolve();
      });
    });
  }

  async search(){
    if(this.searchKeyword.trim() !== ''){
      await this.loadRisks();
      const searchTerm = this.searchKeyword.trim();
      const isNumeric = /^\d+$/.test(searchTerm); //check if the searchterm is a valid number 

      if (isNumeric) {
        const searchResult = this.risks.filter(risk => risk.id === parseInt(searchTerm));

        if (searchResult.length > 0) {
          this.risks = searchResult;
        } else {
          this.risks = []; // Handling the case when Id is not found
          // this.issues.push({ id: -1, name:'Not Found', status:'Not', desc: 'ID not found', stdt:'Not', cldt:'Not' });
        }
        // this.issues = this.issues.filter(issue => issue.id.toString().includes(this.searchKeyword.trim()));
    } else {
      this.risks = []; // Handling the case when the search term is not a valid number
      this.risks.push({ id: -1, name:'Not Found', status:'Not', desc: 'Invalid ID', stdt:'Not', cldt:'Not', reason:'Not' });
    }
    } else {
      await this.loadRisks(); //if the search keyword is empty, reload all issues
    }
  }


}
