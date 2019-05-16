/* tslint:disable */
import { Syndrome } from './syndrome';
export interface ConsultationDetails {
  age?: number;
  cachable?: boolean;
  height?: number;
  note?: string;
  symptoms?: Array<Syndrome>;
  typeName?: string;
  weight?: number;
}
