import { TestBed } from '@angular/core/testing';

import { MainPageServiceService } from './main-page-service.service';

describe('MainPageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainPageServiceService = TestBed.get(MainPageServiceService);
    expect(service).toBeTruthy();
  });
});
