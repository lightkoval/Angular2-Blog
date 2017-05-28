import { TestBed, inject } from '@angular/core/testing';
import { FormatDateService } from './format-date.service';

describe('FormatDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatDateService]
    });
  });

  it('should ...', inject([FormatDateService], (service: FormatDateService) => {
    expect(service).toBeTruthy();
  }));
});
