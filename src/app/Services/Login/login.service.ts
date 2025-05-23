import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login() {
    const params = new URLSearchParams({
      client_id: '3cee90dbc73a4fe4a22d0985195d5b34',
      response_type: 'token',
      redirect_uri: 'https://marck2004.github.io/AngularSpotify/callback',
      scope: 'user-read-private user-read-email'
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }

}
