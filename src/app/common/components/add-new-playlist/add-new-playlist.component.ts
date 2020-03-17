import { Component, OnInit, Input } from "@angular/core";
import { CollectionService } from '../../services/collection.service';
import { OverlayService } from '../../services/overlay.service';

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
