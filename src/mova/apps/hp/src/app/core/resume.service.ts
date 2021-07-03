import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume } from './resume';
import { map, shareReplay } from 'rxjs/operators';
import { parse } from 'yaml';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private resume$: Observable<Resume>;

  constructor(http: HttpClient) {
    this.resume$ = http
      .get('assets/resume.yaml', {
        observe: 'body',
        responseType: 'text',
      })
      .pipe(
        map((text) => parse(text) as Resume),
        shareReplay({
          bufferSize: 1,
          refCount: true,
        })
      );
  }

  get(): Observable<Resume> {
    return this.resume$;
  }
}
