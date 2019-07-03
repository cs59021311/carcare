import { TestBed } from '@angular/core/testing';

import { RegisterMemberService } from './register-member.service';

describe('RegisterMemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterMemberService = TestBed.get(RegisterMemberService);
    expect(service).toBeTruthy();
  });
});
