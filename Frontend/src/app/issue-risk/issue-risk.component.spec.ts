import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueRiskComponent } from './issue-risk.component';

describe('IssueRiskComponent', () => {
  let component: IssueRiskComponent;
  let fixture: ComponentFixture<IssueRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueRiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
