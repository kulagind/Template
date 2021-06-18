import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../types/prescription.type';
import { PrescriptionTypes } from '../../enums/prescription-types.enum';
import { MatDialog } from '@angular/material/dialog';
import { PrescriptionEditDialogComponent } from '../prescription-edit-dialog/prescription-edit-dialog.component';

@Component({
  selector: 'app-prescription-widget',
  templateUrl: './prescription-widget.component.html',
  styleUrls: ['./prescription-widget.component.scss']
})
export class PrescriptionWidgetComponent implements OnInit {

  public prescriptions: Prescription[] = [
    {
      title: 'Парацетомол',
      description: '2 раза в день после завтрака',
      type: PrescriptionTypes.MEDICATION,
    },
    {
      title: 'Уголь',
      description: 'Навсегда',
      type: PrescriptionTypes.MEDICATION,
    },
    {
      title: 'Прогулка',
      description: 'После ужина',
      type: PrescriptionTypes.RECOMMENDATION,
    },
  ]

  constructor(
    private dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
  }

  public handleEditButton(prescription: Prescription): void {
    this.dialog.open(PrescriptionEditDialogComponent, {
      data: {
        prescription,
        editMode: true,
      }
    });
  }

  public handleCreateButton(): void {
    this.dialog.open(PrescriptionEditDialogComponent, {
      data: {
        editMode: false,
      }
    });
  }

}
