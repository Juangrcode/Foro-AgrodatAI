import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsersComponent } from './join-users.component';

describe('JoinUsersComponent', () => {
  let component: JoinUsersComponent;
  let fixture: ComponentFixture<JoinUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
