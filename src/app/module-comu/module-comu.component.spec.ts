import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleComuComponent } from './module-comu.component';

describe('ModuleComuComponent', () => {
  let component: ModuleComuComponent;
  let fixture: ComponentFixture<ModuleComuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleComuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleComuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
