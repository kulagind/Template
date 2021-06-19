import { PrescriptionTypes } from '../enums/prescription-types.enum';

export interface Prescription {
  type: PrescriptionTypes;
  title: string;
  description: string;
  dateFrom?: Date;
  dateTo?: Date;
  id: string;
}
