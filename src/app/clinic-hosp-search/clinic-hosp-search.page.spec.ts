import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicHospSearchPage } from './clinic-hosp-search.page';

describe('ClinicHospSearchPage', () => {
  let component: ClinicHospSearchPage;
  let fixture: ComponentFixture<ClinicHospSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicHospSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicHospSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
