import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommonComponent } from './create-common.component';

describe('CreateCommonComponent', () => {
  let component: CreateCommonComponent;
  let fixture: ComponentFixture<CreateCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
