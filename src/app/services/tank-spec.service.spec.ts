import { TestBed } from '@angular/core/testing';

import { TankSpecService } from './tank-spec.service';

describe('TankSpecService', () => {
  let service: TankSpecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TankSpecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
