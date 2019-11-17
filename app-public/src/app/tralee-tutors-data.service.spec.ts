import { TestBed } from '@angular/core/testing';

import { TraleeTutorsDataService } from './tralee-tutors-data.service';

describe('TraleeTutorsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraleeTutorsDataService = TestBed.get(TraleeTutorsDataService);
    expect(service).toBeTruthy();
  });
});
