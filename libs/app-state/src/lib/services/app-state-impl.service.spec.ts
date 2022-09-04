import { TestBed } from '@angular/core/testing';

import { AppStateImplService } from './app-state-impl.service';

describe('AppStateImplService', () => {
  let service: AppStateImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStateImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
