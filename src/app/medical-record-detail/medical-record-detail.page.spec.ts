import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordDetailPage } from './medical-record-detail.page';

describe('MedicalRecordDetailPage', () => {
  let component: MedicalRecordDetailPage;
  let fixture: ComponentFixture<MedicalRecordDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRecordDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
