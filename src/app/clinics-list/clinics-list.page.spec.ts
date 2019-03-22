import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsListPage } from './clinics-list.page';

describe('ClinicsListPage', () => {
  let component: ClinicsListPage;
  let fixture: ComponentFixture<ClinicsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
