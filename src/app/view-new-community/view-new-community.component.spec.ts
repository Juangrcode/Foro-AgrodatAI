import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewCommunityComponent } from './view-new-community.component';

describe('ViewNewCommunityComponent', () => {
  let component: ViewNewCommunityComponent;
  let fixture: ComponentFixture<ViewNewCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNewCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
