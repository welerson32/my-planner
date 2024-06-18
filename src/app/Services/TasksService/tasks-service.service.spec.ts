/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TasksServiceService } from './tasks-service.service';

describe('Service: TasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksServiceService]
    });
  });

  it('should ...', inject([TasksServiceService], (service: TasksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
