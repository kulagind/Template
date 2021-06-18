import { Component, Inject, OnInit } from '@angular/core';
import { Prescription } from '../../types/prescription.type';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-prescription-edit-dialog',
  templateUrl: './prescription-edit-dialog.component.html',
  styleUrls: ['./prescription-edit-dialog.component.scss']
})
export class PrescriptionEditDialogComponent implements OnInit {

  public prescription: Prescription;
  public formGroup: FormGroup;
  public editMode: boolean;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    private data: any,
  ) {
    this.prescription = this.data.prescription;
    this.formGroup = this.formBuilder.group({
      type: this.prescription?.type || null,
      description: this.prescription?.description || null,
      title: this.prescription?.title || null,
      dateFrom: this.prescription?.dateFrom || null,
      dateTo: this.prescription?.dateTo || null,
    });
    this.editMode = this.data.editMode;
  }

  public ngOnInit(): void {
  }

}
