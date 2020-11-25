import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommonComponent } from './new-common.component';

describe('NewCommonComponent', () => {
  let component: NewCommonComponent;
  let fixture: ComponentFixture<NewCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
