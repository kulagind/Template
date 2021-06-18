import { PrescriptionTypes } from '../enums/prescription-types.enum';

export interface Prescription {
  type: PrescriptionTypes;
  title: string;
  description: string;
}
