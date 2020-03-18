import { DATA } from "./../../interfaces/data";
import { Component, OnInit, Input } from "@angular/core";
import { Collection } from "../../interfaces/collection";

@Component({
  selector: "track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.less"]
})
export class TrackListComponent implements OnInit {
  @Input() collection: Collection;
  
  constructor() {}

  ngOnInit() {
    this.collection = DATA.userCollections[0];
    this.populateCollection();
  }

  private populateCollection() {
    let numberOfTracks = this.collection.tracks.length;
    this.collection._numberOfTracks = numberOfTracks > 1 ? `${numberOfTracks} songs` : `${numberOfTracks} song`;
    this.collection._coverImageURL = this.getCoverImage(this.collection.coverImage);
    this.collection.tracks.forEach(x => {
      x._displayedDuration = this.convertSecondToMinute(x.duration);
    });
  }

  private convertSecondToMinute(durationInSecond: number) {
    let minute = Math.floor(durationInSecond / 60);
    let second = durationInSecond - minute * 60;
    return `${minute}:${second}`;
  }

  private getCoverImage(coverImage: string) {
    return `/assets/images/${coverImage}`;
  }

  // collection = <Collection>{
  //   id: "collection-1",
  //   name: "Chill Hits",
  //   author: "SongILike",
  //   tracks: [
  //     {
  //       id: "track-1",
  //       name: "Not 20 Anymore",
  //       artists: ["Bebe Rexha"],
  //       collection: "Not 20 Anymore"
  //     },
  //     {
  //       id: "track-2",
  //       name: "Temporary",
  //       artists: ["Ella Vos"],
  //       collection: "Temporary"
  //     },
  //     {
  //       id: "track-3",
  //       name: "Dust",
  //       artists: ["Matt Simons", "Betty Who"],
  //       collection: "After The Landside"
  //     },
  //     {
  //       id: "track-4",
  //       name: "Best Part (feat. Daniel Caesar)",
  //       artists: ["H.E.R.", "Daniel Caesar"],
  //       collection: "Freudian"
  //     },
  //     {
  //       id: "track-5",
  //       name: "They Can’t Take That Away From Me",
  //       artists: ["José James"],
  //       collection: "Fifty Shades Darker (Original Motion Picture Soundtrack)"
  //     }
  //   ]
  // };
}
