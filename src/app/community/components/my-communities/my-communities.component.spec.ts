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

<<<<<<< HEAD:src/app/interest/interest.component.spec.ts
  beforeEach(() => { 
    fixture = TestBed.createComponent(InterestComponent);
=======
  beforeEach(() => {
    fixture = TestBed.createComponent(MyCommunitiesComponent);
>>>>>>> 990c5a8de1c03fa35dd873a5e6415ac989c6dcac:src/app/community/components/my-communities/my-communities.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
