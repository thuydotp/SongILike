import { Component, OnInit, Input } from '@angular/core';
import { Collection } from 'src/app/common/interfaces/collection';
import { DATA } from 'src/app/common/interfaces/data';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.less']
})
export class PlaylistListComponent implements OnInit {

  @Input() collections: Collection[];
  
  constructor() {}

  ngOnInit() {
    this.collections = DATA.user.collections || [];
    this.populateCollection();
  }

  private populateCollection() {
    this.collections.forEach(collection => {
        let numberOfTracks = collection.tracks.length;
        collection._numberOfTracks = numberOfTracks > 1 ? `${numberOfTracks} songs` : `${numberOfTracks} song`;
        collection._coverImageURL = this.getCoverImage(collection.coverImage);
        collection.tracks.forEach(x => x._displayedDuration = this.convertSecondToMinute(x.duration));      
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

}
