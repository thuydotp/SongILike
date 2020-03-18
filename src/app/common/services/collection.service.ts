import { DATA } from './../interfaces/data';
import { Injectable } from "@angular/core";
import { Collection } from "../interfaces/collection";

@Injectable({
  providedIn: "root"
})
export class CollectionService {
  constructor() {}

  private userCollections = DATA.user.collections || [];

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
