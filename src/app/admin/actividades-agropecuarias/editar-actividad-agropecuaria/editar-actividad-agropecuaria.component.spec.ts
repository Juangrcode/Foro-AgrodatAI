/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditarActividadAgropecuariaComponent } from './editar-actividad-agropecuaria.component';

describe('EditarActividadAgropecuariaComponent', () => {
  let component: EditarActividadAgropecuariaComponent;
  let fixture: ComponentFixture<EditarActividadAgropecuariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarActividadAgropecuariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarActividadAgropecuariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
