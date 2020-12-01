import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCreadasComponent } from './module-creadas.component';

describe('ModuleCreadasComponent', () => {
  let component: ModuleCreadasComponent;
  let fixture: ComponentFixture<ModuleCreadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleCreadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleCreadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
