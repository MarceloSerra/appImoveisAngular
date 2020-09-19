import { TestBed } from '@angular/core/testing';

import { ImoveisApiService } from './imoveis-api.service';

describe('ImoveisApiService', () => {
  let service: ImoveisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImoveisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
