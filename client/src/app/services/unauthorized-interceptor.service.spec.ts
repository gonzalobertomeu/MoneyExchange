import { TestBed } from '@angular/core/testing';

import { UnauthorizedInterceptorService } from './unauthorized-interceptor.service';

describe('UnauthorizedInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnauthorizedInterceptorService = TestBed.get(UnauthorizedInterceptorService);
    expect(service).toBeTruthy();
  });
});
