import { Router, ROUTER_CONFIGURATION } from '@angular/router';
import { User } from './../common/models/user';
import { AuthService } from './../common/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authService.authenticate().subscribe();
    this.router.navigate(['/courses']);
  }
}
