import { TestBed } from '@angular/core/testing';

import { MyInterestsService } from './my-interests.service';

describe('MyInterestsService', () => {
  let service: MyInterestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInterestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
