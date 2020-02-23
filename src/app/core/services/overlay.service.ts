import { DeletePlaylistComponent } from './../../shared/components/delete-playlist/delete-playlist.component';
import { OverlayModel } from "./../interfaces/overlay";
import { AddNewPlaylistComponent } from "./../../shared/components/add-new-playlist/add-new-playlist.component";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class OverlayService {
  constructor() {}

  getOverlay(): OverlayModel[] {
    return [
      new OverlayModel(AddNewPlaylistComponent, { name: "Song 1" }),
      new OverlayModel(AddNewPlaylistComponent, { name: "Song 2" }),
      new OverlayModel(DeletePlaylistComponent, { name: "Song A" }),
      new OverlayModel(AddNewPlaylistComponent, { name: "Song B" }),
      new OverlayModel(AddNewPlaylistComponent, { name: "Song C" })
    ];
  }
}
