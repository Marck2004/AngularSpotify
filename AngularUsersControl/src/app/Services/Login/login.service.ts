import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginWithSpotify() {
    const clientId = '3cee90dbc73a4fe4a22d0985195d5b34';
    const redirectUri = 'https://developer.spotify.com/dashboard/3cee90dbc73a4fe4a22d0985195d5b34';
    const scope = 'user-read-private user-read-email';
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.href = authUrl;
  }

  constructor() { }


}
