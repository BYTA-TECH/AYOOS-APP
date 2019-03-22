import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriesPage } from './laboratories.page';

describe('LaboratoriesPage', () => {
  let component: LaboratoriesPage;
  let fixture: ComponentFixture<LaboratoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
