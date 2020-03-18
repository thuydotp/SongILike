import { DATA } from './../interfaces/data';
import { Injectable } from "@angular/core";
import { Collection } from "../interfaces/collection";

@Injectable({
  providedIn: "root"
})
export class CollectionService {
  constructor() {}

  // private userCollections: Collection[] = [
  //   { id: 1, displayedName: "Playlist 1", author: "", tracks: [] },
  //   { id: 2, displayedName: "Playlist 2", author: "", tracks: [] },
  //   { id: 3, displayedName: "Playlist 3", author: "", tracks: [] },
  //   { id: 4, displayedName: "Playlist 4", author: "", tracks: [] },
  //   { id: 5, displayedName: "Playlist 5", author: "", tracks: [] },
  //   { id: 6, displayedName: "Playlist 6", author: "", tracks: [] },
  //   { id: 7, displayedName: "Playlist 7", author: "", tracks: [] },
  //   { id: 8, displayedName: "Playlist 8", author: "", tracks: [] },
  //   { id: 9, displayedName: "Playlist 9", author: "", tracks: [] },
  //   { id: 10, displayedName: "Playlist 10", author: "", tracks: [] }
  // ];

  private userCollections = DATA.userCollections || [];

  getUserCollection(): Collection[] {
    return this.userCollections || [];
  }

  addCollection(collectionName: string) {
    if (collectionName && collectionName.trim()) {

      let collectionId = this.userCollections.length + 1;
      let newCollection: Collection = <Collection>{
        id: collectionId,
        displayedName: collectionName,
        author: "Song I Like",
        tracks: [],
        coverImage: 'default-img.jpg'
      };
      this.userCollections.push(newCollection);
    }
  }
}
