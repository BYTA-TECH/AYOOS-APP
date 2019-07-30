/* tslint:disable */
import { TestDate } from './test-date';
import { Sort } from './sort';
export interface PageOfTestDate {
  content?: Array<TestDate>;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
