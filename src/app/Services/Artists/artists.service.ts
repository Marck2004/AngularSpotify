import { ArtistsInteface } from '@/app/Interface/artists/artists-inteface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { artistIds } from '@/app/Consts/artistsIds';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private uri = `https://api.spotify.com/v1/artists?ids=${artistIds.join()}`;
  constructor(private http: HttpClient) { }

  getArtists(): Observable<ArtistsInteface[]> {
    return this.http.get<ArtistsInteface[]>(this.uri, {
      headers:
        { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('access_token')!)}` }
    });
  }


}
