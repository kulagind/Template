import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePatientTableLayoutComponent } from './private-patient-table-layout.component';

describe('PrivatePatientTableLayoutComponent', () => {
  let component: PrivatePatientTableLayoutComponent;
  let fixture: ComponentFixture<PrivatePatientTableLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivatePatientTableLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatePatientTableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
