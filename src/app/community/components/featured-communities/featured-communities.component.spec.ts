import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCommunitiesComponent } from './featured-communities.component';

describe('FeaturedCommunitiesComponent', () => {
  let component: FeaturedCommunitiesComponent;
  let fixture: ComponentFixture<FeaturedCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
