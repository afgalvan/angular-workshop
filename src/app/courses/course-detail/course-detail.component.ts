import { Course } from './../../common/models/course';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
  currentCourse: Course;
  title = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set course(value: Course) {
    if (!value) return;
    this.currentCourse = { ...value };
    this.title = this.currentCourse.title;
  }
}
