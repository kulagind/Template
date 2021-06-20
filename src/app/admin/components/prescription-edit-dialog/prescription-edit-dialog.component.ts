import { Component, Inject, OnInit } from '@angular/core';
import { Prescription } from '../../types/prescription.type';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MedicineHttpService} from "../../../user/services/medicine-http.service";
import {PrescriptionTypes} from "../../enums/prescription-types.enum";
import {AdminService} from "../../services/admin.service";

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
    private readonly adminService: AdminService,
    private readonly medicineService: MedicineHttpService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    private data: any,
    private dialogRef: MatDialogRef<PrescriptionEditDialogComponent>,
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

  public handleSave(): void {
    if (this.formGroup.value.type == PrescriptionTypes.MEDICATION) {
      this.medicineService.postMedicine(this.formGroup.value.title, this.data.uid).subscribe()
    }
    this.dialogRef.close(this.formGroup.value);
  }

  public handleClose(): void {
    this.dialogRef.close();
  }

}
