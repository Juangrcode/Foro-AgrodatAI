import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquetaComponent } from './maqueta.component';

describe('MaquetaComponent', () => {
  let component: MaquetaComponent;
  let fixture: ComponentFixture<MaquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
