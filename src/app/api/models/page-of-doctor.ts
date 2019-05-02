/* tslint:disable */
import { Doctor } from './doctor';
import { Sort } from './sort';
export interface PageOfDoctor {
  content?: Array<Doctor>;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
