import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuardService } from './security/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  {
    path: 'my-appointments',
    loadChildren: './pages/my-appointments/my-appointments.module#MyAppointmentsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'medical-records',
    loadChildren: './pages/medical-records/medical-records.module#MedicalRecordsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'consultations',
    loadChildren: './pages/consultations/consultations.module#ConsultationsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'reminders',
    loadChildren: './pages/reminders/reminders.module#RemindersPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'payments',
    loadChildren: './pages/payments/payments.module#PaymentsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'help-center',
    loadChildren: './pages/help-center/help-center.module#HelpCenterPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'about-us',
    loadChildren: './pages/about-us/about-us.module#AboutUsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'doctors-list',
    loadChildren: './pages/doctors-list/doctors-list.module#DoctorsListPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'clinics-list',
    loadChildren: './pages/clinics-list/clinics-list.module#ClinicsListPageModule'
  },
  {
    path: 'location-search',
    loadChildren: './pages/location-search/location-search.module#LocationSearchPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'clinic-hosp-search',
    loadChildren: './pages/clinic-hosp-search/clinic-hosp-search.module#ClinicHospSearchPageModule'
  },
  {
    path: 'notifications',
    loadChildren: './pages/notifications/notifications.module#NotificationsPageModule'
  },
  {
    path: 'laboratories',
    loadChildren: './pages/laboratories/laboratories.module#LaboratoriesPageModule'
  },
  {
    path: 'pharmacies',
    loadChildren: './pages/pharmacies/pharmacies.module#PharmaciesPageModule'
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'full-text-search',
    loadChildren: './pages/full-text-search/full-text-search.module#FullTextSearchPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'map-view-doctors',
    loadChildren: './pages/map-view-doctors/map-view-doctors.module#MapViewDoctorsPageModule'
  },
  {
    path: 'doctor-booking/:id',
    loadChildren: './pages/doctor-booking/doctor-booking.module#DoctorBookingPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'appointment-detail/:id',
    loadChildren: './pages/appointment-detail/appointment-detail.module#AppointmentDetailPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'medical-record-detail/:ref',
    loadChildren: './pages/medical-record-detail/medical-record-detail.module#MedicalRecordDetailPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'popover-add-member',
    loadChildren: './pages/popover-add-member/popover-add-member.module#PopoverAddMemberPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'appointment-confirmation/:id',
    loadChildren: './pages/appointment-confirmation/appointment-confirmation.module#AppointmentConfirmationPageModule',
    canActivate: [AuthGuardService]

  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'qualifications-list', loadChildren: './pages/qualifications-list/qualifications-list.module#QualificationsListPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), OAuthModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
