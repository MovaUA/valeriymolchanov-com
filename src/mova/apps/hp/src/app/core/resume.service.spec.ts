import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ResumeService } from './resume.service';

describe('ResumeService', () => {
  let http: HttpTestingController;
  let service: ResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    http = TestBed.get(HttpTestingController);
    service = TestBed.inject(ResumeService);
  });

  afterEach(() => {
    http.verify();
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

    service.get().subscribe((resume) => {
      expect(resume.name).toEqual('One');
      expect(resume.surname).toEqual('Two');
    });

    const req = http.expectOne('assets/resume.yaml');

    req.flush(body);
  });
});
