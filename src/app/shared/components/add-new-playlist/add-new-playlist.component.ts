import { Component, OnInit, Input } from "@angular/core";
import { OverlayService } from "src/app/core/services/overlay.service";
import { CollectionService } from "src/app/core/services/collection.service";

@Component({
  selector: "app-add-new-playlist",
  templateUrl: "./add-new-playlist.component.html",
  styleUrls: ["./add-new-playlist.component.less"]
})
export class AddNewPlaylistComponent implements OnInit {
  @Input() title: any;
  newCollectionName: string = "";
  
  constructor(
    private collectionService: CollectionService,
    private overlayService: OverlayService
  ) {}

  ngOnInit() {}

  closeOverlay() {
    this.overlayService.toggleOverlay(false);
    this.newCollectionName = null;
  }

  addNewCollection() {
    this.collectionService.addCollection(this.newCollectionName);
    this.closeOverlay();
  }
}
