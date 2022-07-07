import { Router } from '@angular/router';
import { AuthService } from './common/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular 13 Fundamentals';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout().subscribe();
    this.router.navigate(['/login']);
  }
}
