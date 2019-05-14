/* tslint:disable */
import { Qualification } from './qualification';
import { ContactInfo } from './contact-info';
import { PaymentSettings } from './payment-settings';
import { ReservedSlot } from './reserved-slot';
import { Review } from './review';
import { UserRating } from './user-rating';
import { WorkPlace } from './work-place';
export interface Doctor {
  qualifications?: Array<Qualification>;
  contactInfo?: ContactInfo;
  id?: number;
  image?: string;
  imageContentType?: string;
  paymentSettings?: PaymentSettings;
  practiceSince?: string;
  doctorId?: string;
  registerNumber?: string;
  reservedSlots?: Array<ReservedSlot>;
  reviews?: Array<Review>;
  specialization?: string;
  totalRating?: number;
  userRatings?: Array<UserRating>;
  workPlaces?: Array<WorkPlace>;
}
