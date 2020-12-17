import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsAdminComponent } from './interests-admin.component';

describe('InterestsAdminComponent', () => {
  let component: InterestsAdminComponent;
  let fixture: ComponentFixture<InterestsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
