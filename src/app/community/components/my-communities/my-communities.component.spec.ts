import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommunitiesComponent } from './my-communities.component';

describe('MyCommunitiesComponent', () => {
  let component: MyCommunitiesComponent;
  let fixture: ComponentFixture<MyCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
