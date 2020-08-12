import { TestBed } from '@angular/core/testing';

import { GlDefService } from './gl-def.service';

describe('GlDefService', () => {
  let service: GlDefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlDefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
