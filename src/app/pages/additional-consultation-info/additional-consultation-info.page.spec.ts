import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalConsultationInfoPage } from './additional-consultation-info.page';

describe('AdditionalConsultationInfoPage', () => {
  let component: AdditionalConsultationInfoPage;
  let fixture: ComponentFixture<AdditionalConsultationInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalConsultationInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalConsultationInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
