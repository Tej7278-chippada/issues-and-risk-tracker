import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { IssueComponent } from './issue/issue.component';
import { RiskComponent } from './risk/risk.component'
import { IssueRiskComponent } from './issue-risk/issue-risk.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { CommonModule } from '@angular/common';
import { IssueUpdateComponent } from './issue-update/issue-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateRiskComponent } from './create-risk/create-risk.component';
import { RiskUpdateComponent } from './risk-update/risk-update.component';
import { IssueUpdate1Component } from './issue/issue-update/issue-update1.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button' ;
import { MatIconModule } from '@angular/material/icon' ;

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CommonModule, BrowserAnimationsModule, MatDialogModule, FormsModule, MatButtonModule, MatIconModule],
  declarations: [AppComponent, IssueComponent, RiskComponent, IssueRiskComponent, CreateIssueComponent, IssueUpdateComponent, CreateRiskComponent, RiskUpdateComponent, IssueUpdate1Component, TableComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
