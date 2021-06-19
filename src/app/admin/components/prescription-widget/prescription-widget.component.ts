import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../types/prescription.type';
import { MatDialog } from '@angular/material/dialog';
import { PrescriptionEditDialogComponent } from '../prescription-edit-dialog/prescription-edit-dialog.component';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionService } from '../../services/prescription.service';

@Component({
  selector: 'app-prescription-widget',
  templateUrl: './prescription-widget.component.html',
  styleUrls: ['./prescription-widget.component.scss']
})
export class PrescriptionWidgetComponent implements OnInit {

  public prescriptions$: Observable<Prescription[]>;
  private patientId: string;

  constructor(
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private prescriptionService: PrescriptionService,
  ) {
    this.prescriptions$ = this.prescriptionService.prescriptions;
  }

  public ngOnInit(): void {
    this.listenRoute();
  }

  public handleEditButton(prescription: Prescription): void {
    this.dialog.open(PrescriptionEditDialogComponent, {
      data: {
        prescription,
        editMode: true,
      }
    });
  }

  private listenRoute(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.prescriptionService.update(id);
        this.patientId = id;
      }
    });
  }

  public handleCreateButton(): void {
    this.dialog.open(PrescriptionEditDialogComponent, {
      data: {
        editMode: false,
      }
    }).afterClosed()
      .pipe(
        filter(value => !!value),
      ).subscribe(value => {
        if (this.patientId) {
          this.prescriptionService.create(this.patientId, value);
        }
    });
  }

}
