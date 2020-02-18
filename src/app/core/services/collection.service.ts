import { Injectable } from "@angular/core";
import { Collection } from "../interfaces/collection";

@Injectable({
  providedIn: "root"
})

export class CollectionService {
  constructor() {}

  userCollections: Collection[] = [
    { id: 1, displayedName: "Playlist 1", author: "", tracks: [] },
    { id: 2, displayedName: "Playlist 2", author: "", tracks: [] },
    { id: 3, displayedName: "Playlist 3", author: "", tracks: [] },
    { id: 4, displayedName: "Playlist 4", author: "", tracks: [] },
    { id: 5, displayedName: "Playlist 5", author: "", tracks: [] },
    { id: 6, displayedName: "Playlist 6", author: "", tracks: [] },
    { id: 7, displayedName: "Playlist 7", author: "", tracks: [] },
    { id: 8, displayedName: "Playlist 8", author: "", tracks: [] },
    { id: 9, displayedName: "Playlist 9", author: "", tracks: [] },
    { id: 10, displayedName: "Playlist 10", author: "", tracks: [] }
  ];
}
