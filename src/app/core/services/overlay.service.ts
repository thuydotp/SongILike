import { DeletePlaylistComponent } from './../../shared/components/delete-playlist/delete-playlist.component';
import { OverlayModel } from "./../interfaces/overlay";
import { AddNewPlaylistComponent } from "./../../shared/components/add-new-playlist/add-new-playlist.component";
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class OverlayService {
  constructor() {}
  isOpen: boolean = false;
  private openOverlaySubject : Subject<boolean> = new Subject<boolean>();
  $openOverlay = this.openOverlaySubject.asObservable();

  getOverlay(): OverlayModel[] {
    return [
      new OverlayModel(AddNewPlaylistComponent, { name: "Song 1" }),
      new OverlayModel(AddNewPlaylistComponent, { name: "Song 2" }),
      new OverlayModel(DeletePlaylistComponent, { name: "Song A" }),
      new OverlayModel(AddNewPlaylistComponent, { name: "Song B" }),
      new OverlayModel(AddNewPlaylistComponent, { name: "Song C" })
    ];
  }

  toggleOverlay(isOpen: boolean){
    this.openOverlaySubject.next(isOpen);
  }  
}
