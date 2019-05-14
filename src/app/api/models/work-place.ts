/* tslint:disable */
import { Doctor } from './doctor';
import { SessionInfo } from './session-info';
export interface WorkPlace {
  doctor?: Doctor;
  id?: number;
  location?: string;
  name?: string;
  sessionInfos?: Array<SessionInfo>;
}
