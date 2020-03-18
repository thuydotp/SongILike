import { DATA } from './../interfaces/data';
import { Track, Collection } from "./../interfaces/collection";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PlayingService {
  constructor() {}

  get playingTrackId(): string {
    return DATA.user.playing.trackId || null;
  }

  set playingTrackId(newTrackId: string) {
    if (newTrackId) {
      DATA.user.playing.trackId = newTrackId;
    }
  }

  get playingCollectionId(): string {
    return DATA.user.playing.collectionId || null;
  }

  set playingCollectionId(newCollectionId: string) {
    if (newCollectionId) {
      DATA.user.playing.trackId = newCollectionId;
    }
  }

  getPlayingTrack(): Track {
    return DATA.library.tracks.find(x => x.id == this.playingTrackId);
  }

  getPlayingCollection(): Collection {
    return DATA.library.collections.find(x => x.id == this.playingCollectionId);
  }

}
