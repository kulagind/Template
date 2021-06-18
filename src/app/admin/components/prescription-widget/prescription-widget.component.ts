import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../types/prescription.type';
import { PrescriptionTypes } from '../../enums/prescription-types.enum';

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

  constructor() { }

  public ngOnInit(): void {
  }

}
