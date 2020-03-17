import { DATA } from './../../interfaces/data';
import { Component, OnInit } from "@angular/core";
import { Collection } from '../../interfaces/collection';

@Component({
  selector: "track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.less"]
})
export class TrackListComponent implements OnInit {
  collection: Collection;
  constructor() {}
  
  ngOnInit() {
    this.collection = DATA.userCollections[0];
  }

  convertSecondToMinute(durationInSecond: number){
    let minute = Math.floor(durationInSecond/60);
    let second = durationInSecond - (minute * 60);
    return `${minute}:${second}`;
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
