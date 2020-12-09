import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCommunityComponent } from './posts-community.component';

describe('PostsCommunityComponent', () => {
  let component: PostsCommunityComponent;
  let fixture: ComponentFixture<PostsCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
