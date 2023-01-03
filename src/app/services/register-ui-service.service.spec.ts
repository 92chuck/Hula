import { TestBed } from '@angular/core/testing';

import { RegisterUiServiceService } from './register-ui-service.service';

describe('RegiesterUiServiceService', () => {
  let service: RegisterUiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterUiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
