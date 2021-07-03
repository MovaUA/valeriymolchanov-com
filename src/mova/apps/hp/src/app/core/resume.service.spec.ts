import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ResumeService } from './resume.service';

describe('ResumeService', () => {
  let httpTestingController: HttpTestingController;
  let service: ResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(ResumeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get() returns Resume', () => {
    const body = `
name: One
surname: Two
    `;

    service.get().subscribe((resume) => {
      expect(resume.name).toEqual('One');
      expect(resume.surname).toEqual('Two');
    });

    const req = httpTestingController.expectOne('assets/resume.yaml');

    req.flush(body);
  });
});
