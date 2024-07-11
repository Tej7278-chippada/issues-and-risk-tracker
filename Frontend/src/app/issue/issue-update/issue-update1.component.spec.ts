import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueUpdate1Component } from './issue-update1.component';

describe('IssueUpdateComponent', () => {
  let component: IssueUpdate1Component;
  let fixture: ComponentFixture<IssueUpdate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueUpdate1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueUpdate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
