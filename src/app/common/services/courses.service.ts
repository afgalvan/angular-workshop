import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private model = 'lines-investigation';

  constructor(private httpCLient: HttpClient) {}

  getUrl(id: string = ''): string {
    return `${environment.BASE_URL}/${this.model}/${id}`;
  }

  getCourses(): Observable<Course[]> {
    return this.httpCLient.get<Course[]>(this.getUrl());
  }

  getCourse(id: string): Observable<Course> {
    return this.httpCLient.get<Course>(this.getUrl(id));
  }

  saveCourse(course: Course) {
    return this.httpCLient.post(this.getUrl(), course);
  }

  updateCourse(course: Course) {
    return this.httpCLient.put(this.getUrl(course.id), course);
  }

  deleteCourse(id: string) {
    return this.httpCLient.delete(this.getUrl(id));
  }
}
