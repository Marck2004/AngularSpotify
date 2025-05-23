import { Routes } from '@angular/router';
import { LandingComponent } from './Components';
import { ArtistsComponent } from './Components/artists/artists.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'artists', component: ArtistsComponent }
];
