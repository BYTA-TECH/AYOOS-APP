/* tslint:disable */
import { ContactInfo } from './contact-info';
import { Qualification } from './qualification';
import { Review } from './review';
import { SessionInfo } from './session-info';
import { UserRating } from './user-rating';
import { WorkPlace } from './work-place';
export interface Doctor {
  registerNumber?: string;
  contactInfo?: ContactInfo;
  id?: number;
  image?: string;
  imageContentType?: string;
  practiceSince?: string;
  qualifications?: Array<Qualification>;
  doctorId?: string;
  reviews?: Array<Review>;
  sessionInfos?: Array<SessionInfo>;
  specialization?: string;
  totalRating?: number;
  userRatings?: Array<UserRating>;
  workPlaces?: Array<WorkPlace>;
}
