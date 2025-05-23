import { Injectable, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route: ActivatedRoute, private router: Router) { }

  login() {
    if (localStorage.getItem('access_token')) {
      return;
    }

    const params = new URLSearchParams({
      client_id: '3cee90dbc73a4fe4a22d0985195d5b34',
      response_type: 'token',
      redirect_uri: 'http://localhost:4200/',
      scope: 'user-read-private user-read-email'
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }

  getToken() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const params = new URLSearchParams(fragment);

        localStorage.setItem('access_token', JSON.stringify(params.get('access_token')));
        this.router.navigate(['/'])
      }
    });
  }

}
