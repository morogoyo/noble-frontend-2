import { TestBed } from '@angular/core/testing';

import { ClientAssetsService } from './client-assets.service';

describe('ClientAssestsService', () => {
  let service: ClientAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
