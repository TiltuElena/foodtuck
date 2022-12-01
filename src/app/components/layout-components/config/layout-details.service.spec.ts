import { TestBed } from '@angular/core/testing';

import { LayoutDetailsService } from './layout-details.service';

describe('LayoutDetailsService', () => {
  let service: LayoutDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
