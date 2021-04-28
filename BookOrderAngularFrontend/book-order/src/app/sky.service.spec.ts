/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SkyService } from './sky.service';

describe('Service: Sky', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkyService]
    });
  });

  it('should ...', inject([SkyService], (service: SkyService) => {
    expect(service).toBeTruthy();
  }));
});
