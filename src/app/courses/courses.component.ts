import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  selectedCourse = { ...emptyCourse };
  currentId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.listenToRoute();
    this.fetchCourses();
  }

  private fetchCourses(): void {
    this.courses$ = this.coursesService.getCourses();
  }

  private listenToRoute(): void {
    this.route.paramMap.subscribe((params) => {
      this.currentId = params.get('id');
      if (this.currentId) {
        this.coursesService
          .getCourse(this.currentId)
          .subscribe((response) => (this.selectedCourse = response));
      }
    });
  }

  selectCourse(course: Course): void {
    this.selectedCourse = course;
    if (!this.selectedCourse?.id) return;
    this.router.navigate(['/courses', this.selectedCourse.id]);
  }

  saveCourse(course: Course): void {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  updateCourse(course: Course): void {
    this.coursesService
      .updateCourse(course)
      .subscribe((_) => this.fetchCourses());
  }

  createCourse(course: Course): void {
    this.coursesService
      .saveCourse(course)
      .subscribe((_) => this.fetchCourses());
  }

  deleteCourse(courseId: string): void {
    this.coursesService
      .deleteCourse(courseId)
      .subscribe((_) => this.fetchCourses());
  }

  reset(): void {
    this.selectCourse({ ...emptyCourse });
  }
}
