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

  isOverlayOpen = true;

  closeOverlay() {
    this.isOverlayOpen = false;
  }
}
