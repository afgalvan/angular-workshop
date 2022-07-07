import { HttpClient } from '@angular/common/http';
import { Lesson } from './../models/lesson';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private model = 'lessons';

  constructor(private httpClient: HttpClient) {}

  getUrl(id: string = ''): string {
    return `${environment.BASE_URL}/${this.model}/${id}`;
  }

  getLessons(): Observable<Lesson[]> {
    return this.httpClient.get<Lesson[]>(this.getUrl());
  }
}
