import { AddNewPlaylistComponent } from "./../add-new-playlist/add-new-playlist.component";
import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CollectionService } from '../../services/collection.service';
import { OverlayService } from '../../services/overlay.service';


@Component({
  selector: "app-overlay",
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.less"]
})
export class OverlayComponent implements OnInit {
  @ViewChild("overlayBody", { static: true, read: ViewContainerRef }) overlayBody;
  isOverlayOpen = false;
  newCollectionName: string = "";

  constructor(
    private collectionService: CollectionService,
    private overlayService: OverlayService
  ) {}

  ngOnInit() {
    this.overlayService.createOverlay(
      this.overlayBody,
      AddNewPlaylistComponent,
      { title: "Create a new playlist" }
    );
    this.overlayService.$openOverlay.subscribe((isOpen: boolean) => {
      this.isOverlayOpen = isOpen;
    });
  }

  closeOverlay() {
    this.overlayService.toggleOverlay(false);
    this.newCollectionName = null;
  }

  addNewCollection() {
    this.collectionService.addCollection(this.newCollectionName);
    this.closeOverlay();
  }

  onOpenNewPlaylistOverlay() {
    this.overlayService.toggleOverlay(true);
  }
}
