import { Authentication } from './../models/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  isAuthenticated(): Observable<boolean> {
    return this.httpClient
      .get<Authentication>(`${environment.BASE_URL}/auth/user`)
      .pipe(map((response) => response.isAuthenticated));
  }

  private changeAuthState(state: boolean) {
    const request: Authentication = { id: 'user', isAuthenticated: state };
    return this.httpClient.put(`${environment.BASE_URL}/auth/user`, request);
  }

  authenticate() {
    return this.changeAuthState(true);
  }

  logout() {
    return this.changeAuthState(false);
  }
}
