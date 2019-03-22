import { Doctor } from './doctor';
import { Attachment } from "./Attachment";

export class MedicalHistory{
    ref:string;
    doctor:Doctor;
    dateBooked:Date;
    dateConsultation:Date;
    dateReportReview:Date;
    attachments:Attachment[];
    type:string;


}