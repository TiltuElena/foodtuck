import { TestBed } from '@angular/core/testing';

import { CartDetailsService } from './cart-details.service';

describe('IconsService', () => {
  let service: CartDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
