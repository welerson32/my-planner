/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoardsServiceService } from './boards-service.service';

describe('Service: BoardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardsServiceService]
    });
  });

  it('should ...', inject([BoardsServiceService], (service: BoardsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
