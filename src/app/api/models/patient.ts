/* tslint:disable */
import { AddressLine } from './address-line';
export interface Patient {
  id?: number;
  addressLines?: Array<AddressLine>;
  dmsId?: string;
  dob?: string;
  gender?: string;
  createdDate?: string;
  image?: string;
  imageContentType?: string;
  location?: string;
  patientCode?: string;
  phoneNumber?: number;
}
