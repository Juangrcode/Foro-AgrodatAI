/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrearActividadAgropecuariaComponent } from './crear-actividad-agropecuaria.component';

describe('CrearActividadAgropecuariaComponent', () => {
  let component: CrearActividadAgropecuariaComponent;
  let fixture: ComponentFixture<CrearActividadAgropecuariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearActividadAgropecuariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActividadAgropecuariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
