import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInterestsComponent } from './banner-interests.component';

describe('BannerInterestsComponent', () => {
  let component: BannerInterestsComponent;
  let fixture: ComponentFixture<BannerInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
