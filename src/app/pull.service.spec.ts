import { TestBed } from '@angular/core/testing';

import { PullService } from './pull.service';

describe('PullService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PullService = TestBed.get(PullService);
    expect(service).toBeTruthy();
  });
});
