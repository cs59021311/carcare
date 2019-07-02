import { TestBed } from '@angular/core/testing';

import { MemberRegisterService } from './member-register.service';

describe('MemberRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberRegisterService = TestBed.get(MemberRegisterService);
    expect(service).toBeTruthy();
  });
});
