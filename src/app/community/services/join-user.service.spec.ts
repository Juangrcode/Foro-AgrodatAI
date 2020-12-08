import { TestBed } from '@angular/core/testing';

import { JoinUserService } from './join-user.service';

describe('JoinUserService', () => {
  let service: JoinUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
