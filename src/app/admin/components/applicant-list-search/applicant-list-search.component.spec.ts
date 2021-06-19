import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantListSearchComponent } from './applicant-list-search.component';

describe('ApplicantListSearchComponent', () => {
  let component: ApplicantListSearchComponent;
  let fixture: ComponentFixture<ApplicantListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
