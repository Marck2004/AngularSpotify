import { Artist, ArtistsInteface } from '@/app/Interface/artists/artists-inteface';
import { ArtistsService } from '@/app/Services/Artists/artists.service';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-artists',
  imports: [MatCardModule, NgFor],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.artistsService.getArtists()
      .subscribe((data: ArtistsInteface) => {
        this.artists = data.artists;
        console.log(this.artists);

      })
  }
}
