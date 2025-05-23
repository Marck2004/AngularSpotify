import { ArtistsService } from '@/app/Services/Artists/artists.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  imports: [],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent implements OnInit {
  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {

    this.artistsService.getArtists()
      .subscribe((data) => {
        console.log(data);

      })
  }
}
