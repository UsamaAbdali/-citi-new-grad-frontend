import { TestBed, inject } from '@angular/core/testing';

import { SercuritiesService } from './sercurities.service';

describe('SercuritiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SercuritiesService]
    });
  });

  it('should be created', inject([SercuritiesService], (service: SercuritiesService) => {
    expect(service).toBeTruthy();
  }));
});
