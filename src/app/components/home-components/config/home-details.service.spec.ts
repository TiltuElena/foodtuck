import { TestBed } from '@angular/core/testing';

import { HomeDetailsService } from './home-details.service';

describe('HomeDetailsService', () => {
  let service: HomeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
