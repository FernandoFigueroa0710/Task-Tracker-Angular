import { TestBed } from '@angular/core/testing';

import { UiHandlerService } from './ui-handler.service';

describe('UiHandlerService', () => {
  let service: UiHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
