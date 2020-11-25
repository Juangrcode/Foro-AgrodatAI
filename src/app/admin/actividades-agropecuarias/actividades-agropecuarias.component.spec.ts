/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActividadesAgropecuariasComponent } from './actividades-agropecuarias.component';

describe('ActividadesAgropecuariasComponent', () => {
  let component: ActividadesAgropecuariasComponent;
  let fixture: ComponentFixture<ActividadesAgropecuariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesAgropecuariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesAgropecuariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
