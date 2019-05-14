/* tslint:disable */
import { AddressLine } from './address-line';
export interface Patient {
  addressLines?: Array<AddressLine>;
  createdDate?: string;
  dmsId?: string;
  dob?: string;
  gender?: string;
  id?: number;
  location?: string;
  patientCode?: string;
  phoneNumber?: number;
}
