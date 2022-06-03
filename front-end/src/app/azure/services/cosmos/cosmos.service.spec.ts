import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CosmosService } from './cosmos.service';

describe('CosmosService', () => {
  let service: CosmosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CosmosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
