import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewCommunityComponent } from './form-new-community.component';

describe('FormNewCommunityComponent', () => {
  let component: FormNewCommunityComponent;
  let fixture: ComponentFixture<FormNewCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
