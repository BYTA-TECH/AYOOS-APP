import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationsListPage } from './specializations-list.page';

describe('SpecializationsListPage', () => {
  let component: SpecializationsListPage;
  let fixture: ComponentFixture<SpecializationsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
