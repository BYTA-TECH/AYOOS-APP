import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
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
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map