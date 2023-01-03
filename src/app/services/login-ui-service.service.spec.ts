import { TestBed } from '@angular/core/testing';

import { LoginUiServicesService } from './login-ui-service.service';

describe('LoginUiServicesService', () => {
  let service: LoginUiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
