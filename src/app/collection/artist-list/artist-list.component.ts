import { Artist } from './../../common/interfaces/collection';
import { Component, OnInit, Input } from '@angular/core';
import { DATA } from 'src/app/common/interfaces/data';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.less']
})
export class ArtistListComponent implements OnInit {

  @Input() artists: Artist[];
  
  constructor() {}

  ngOnInit() {
    this.artists = DATA.user.artists || [];
    this.populateCollection();
  }

  private populateCollection() {
    this.artists.forEach(collection => {
        collection._coverImageURL = this.getCoverImage(collection.coverImage);              
    });       
  }

  private getCoverImage(coverImage: string) {
    return `/assets/images/${coverImage}`;
  }

}
