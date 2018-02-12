import { TestBed, inject } from '@angular/core/testing';

import { ProductCountService } from './product-count.service';

describe('ProductCountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCountService]
    });
  });

  it('should be created', inject([ProductCountService], (service: ProductCountService) => {
    expect(service).toBeTruthy();
  }));
});
