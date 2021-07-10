import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { load as yamlLoad } from 'js-yaml';
import { Resume } from './resume.models';

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
        map((text) => yamlLoad(text) as Resume),
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
