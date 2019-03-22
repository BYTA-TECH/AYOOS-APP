import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSearchPage } from './location-search.page';

describe('LocationSearchPage', () => {
  let component: LocationSearchPage;
  let fixture: ComponentFixture<LocationSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
