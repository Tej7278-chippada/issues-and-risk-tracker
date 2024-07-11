import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueComponent } from './issue/issue.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { IssueUpdateComponent } from './issue-update/issue-update.component';
import { RiskComponent } from './risk/risk.component';
import { CreateRiskComponent } from './create-risk/create-risk.component';
import { RiskUpdateComponent } from './risk-update/risk-update.component';
import { IssueUpdate1Component } from './issue/issue-update/issue-update1.component';




const routes: Routes = [
  {path: "issue", component: IssueComponent},
  {path: "create-issue", component: CreateIssueComponent},
  {path: "issue-update", component: IssueUpdateComponent},
  {path: "risk", component: RiskComponent},
  {path: "create-risk", component: CreateRiskComponent},
  {path: "risk-update", component: RiskUpdateComponent},
  {path: "issue-update1", component: IssueUpdate1Component},

  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
