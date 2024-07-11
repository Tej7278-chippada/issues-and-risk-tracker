import { Component, OnInit } from '@angular/core';
import { Risk } from '../risk/risk';
import { RiskService } from '../risk/risk.service';

@Component({
  selector: 'app-risk-update',
  templateUrl: './risk-update.component.html',
  styleUrls: ['./risk-update.component.css']
})
export class RiskUpdateComponent implements OnInit {

  risks!: Risk[];
  errorMessage!: string;
  ADD_BOOK!: boolean;
  UPDATE_RISK!: boolean;
  DELETE_BOOK!: boolean;
  selectedData!: any;
  
  
  
  // book: any;
  // status: any;
  constructor(private riskService: RiskService) { }
  getRisks() {
    this.riskService.getRisks().subscribe({
      next:  risks => this.risks = risks,
      error:error => this.errorMessage = <any>error
    })
  }
  addRisk(riskId: string, name: string, status:string, desc:string, stdt:string, cldt:string, reason:string): void {
    let id=parseInt(riskId)
    this.riskService.addRisk({id, name, status, desc, stdt, cldt , reason})
      .subscribe({next:(risk: any) => this.risks.push(risk)});
  }
  updateRisk(riskId: string, name: string, status:string, desc:string, stdt:string, cldt:string, reason:string): void {
    let id=parseInt(riskId)
    this.riskService.updateRisk({ id, name, status, desc, stdt, cldt , reason})
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
  refreshPage(): void {
    window.location.reload();
  }
  ngOnInit() {
    this.getRisks();
  }

}
