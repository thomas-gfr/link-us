import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUsPage } from './link-us.page';

describe('LinkUsPage', () => {
  let component: LinkUsPage;
  let fixture: ComponentFixture<LinkUsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkUsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
