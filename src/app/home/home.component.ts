import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';
import { Lesson } from '../common/models/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons$: Observable<Lesson[]>;
  selectedLesson = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lessonsService: LessonsService
  ) {}

  ngOnInit() {
    this.lessons$ = this.lessonsService.getLessons();
    this.listenToRoute();
  }

  private listenToRoute() {
    this.route.paramMap.subscribe((params) => {
      const title = params.get('title').split('-').join(' ');
      if (title) {
        this.selectLesson({ title: title });
      }
    });
  }

  selectLesson(lesson: Lesson): void {
    this.selectedLesson = lesson;
    this.router.navigate(['home', lesson.title.split(' ').join('-')]);
  }
}
