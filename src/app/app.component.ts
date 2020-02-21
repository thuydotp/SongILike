import { CollectionService } from "./core/services/collection.service";
import { Collection } from "./core/interfaces/collection";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "SongILike";
  menu = [
    { id: 1, name: "Home", segment: "home" },
    { id: 2, name: "Search", segment: "search" },
    { id: 3, name: "Collection", segment: "collection" },
    { id: 4, name: "Profile", segment: "account" }
  ];

  isOverlayOpen = false;
  newCollectionName: string = '';

  constructor(private collectionService: CollectionService) {}

  closeOverlay() {
    this.isOverlayOpen = false;
    this.newCollectionName = null;
  }

  addNewCollection() {
    this.collectionService.addCollection(this.newCollectionName);
    this.closeOverlay();
  }

  onOpenNewPlaylistOverlay(){
    this.isOverlayOpen = true;
  }
}
