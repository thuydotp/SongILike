import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackListComponent } from './components/track-list/track-list.component';
import { DynamicAnchorDirective } from './directives/dynamic-anchor.directive';
import { OverlayComponent } from './components/overlay/overlay.component';
import { AddNewPlaylistComponent } from './components/add-new-playlist/add-new-playlist.component';
import { DeletePlaylistComponent } from './components/delete-playlist/delete-playlist.component';


@NgModule({
  declarations: [
    TrackListComponent,
    DynamicAnchorDirective,
    OverlayComponent,
    AddNewPlaylistComponent,
    DeletePlaylistComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TrackListComponent,
    DynamicAnchorDirective,
    OverlayComponent,
    AddNewPlaylistComponent,
    DeletePlaylistComponent
  ],
  providers: [
  ],  
  entryComponents: [
    AddNewPlaylistComponent,
    DeletePlaylistComponent
  ]
})
export class SharedModule { }
