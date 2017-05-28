import { TestBed, inject } from '@angular/core/testing';
import { CreateCommentsService } from './create-comments.service';

describe('CreateCommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCommentsService]
    });
  });

  it('should ...', inject([CreateCommentsService], (service: CreateCommentsService) => {
    expect(service).toBeTruthy();
  }));
});
