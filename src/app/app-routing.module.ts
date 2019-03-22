import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'my-appointments', 
  loadChildren: './my-appointments/my-appointments.module#MyAppointmentsPageModule' },
  { path: 'medical-records', loadChildren: './medical-records/medical-records.module#MedicalRecordsPageModule' },
  { path: 'consultations', loadChildren: './consultations/consultations.module#ConsultationsPageModule' },
  { path: 'reminders', loadChildren: './reminders/reminders.module#RemindersPageModule' },
  { path: 'payments', loadChildren: './payments/payments.module#PaymentsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'help-center', loadChildren: './help-center/help-center.module#HelpCenterPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'doctors-list', loadChildren: './doctors-list/doctors-list.module#DoctorsListPageModule' },
  { path: 'clinics-list', loadChildren: './clinics-list/clinics-list.module#ClinicsListPageModule' },
  { path: 'specializations-list', loadChildren: './specializations-list/specializations-list.module#SpecializationsListPageModule' },
  { path: 'location-search', loadChildren: './location-search/location-search.module#LocationSearchPageModule' },
  { path: 'clinic-hosp-search', loadChildren: './clinic-hosp-search/clinic-hosp-search.module#ClinicHospSearchPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'laboratories', loadChildren: './laboratories/laboratories.module#LaboratoriesPageModule' },
  { path: 'pharmacies', loadChildren: './pharmacies/pharmacies.module#PharmaciesPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'full-text-search', loadChildren: './full-text-search/full-text-search.module#FullTextSearchPageModule' },
  { path: 'map-view-doctors', loadChildren: './map-view-doctors/map-view-doctors.module#MapViewDoctorsPageModule' },
  { path: 'doctor-booking/:id', loadChildren: './doctor-booking/doctor-booking.module#DoctorBookingPageModule' },
  { path: 'appointment-detail/:id', loadChildren: './appointment-detail/appointment-detail.module#AppointmentDetailPageModule' },
  { path: 'medical-record-detail', loadChildren: './medical-record-detail/medical-record-detail.module#MedicalRecordDetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
