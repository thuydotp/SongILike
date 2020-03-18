import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';

const routes: Routes = [
  { path: 'playlists', component: PlaylistListComponent },
  { path: 'artists', component: ArtistListComponent },
  {
    path: '',
    redirectTo: 'playlists',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [ ArtistListComponent, PlaylistListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: []
})
export class CollectionModule { }
