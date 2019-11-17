import { TestBed } from '@angular/core/testing';

import { TraleeDataService } from './tralee-data.service';

describe('TraleeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraleeDataService = TestBed.get(TraleeDataService);
    expect(service).toBeTruthy();
  });
});
