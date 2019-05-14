/* tslint:disable */
import { Patient } from './patient';
export interface AddressLine {
  city?: string;
  country?: string;
  district?: string;
  id?: number;
  patient?: Patient;
  state?: string;
  zipCode?: string;
}
