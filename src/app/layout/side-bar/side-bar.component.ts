import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CollectionService } from 'src/app/common/services/collection.service';
import { OverlayService } from 'src/app/common/services/overlay.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {
  mainMenu = [
    {id: 1, displayedName: 'Home', segment: 'home', icon: 'fa fa-home'},
    {id: 2, displayedName: 'Search', segment: 'search', icon: 'fa fa-search'},
    {id: 3, displayedName: 'Collection', segment: 'collection', icon: 'fa fa-bookmark'},
    {id: 4, displayedName: 'Profile', segment: 'account', icon: 'fa fa-user'}
  ];

  // myPlaylists = [
  //   {id: 1, displayedName: 'Pop Sauce'},
  //   {id: 2, displayedName: 'Chill Hits'},
  //   {id: 3, displayedName: 'Hot Acoustics'},
  //   {id: 4, displayedName: 'Warm Fuzzy Feeling'},    
  //   {id: 5, displayedName: 'Little Crazy'},
  //   {id: 6, displayedName: 'The Vampire Diarys'},
  //   {id: 7, displayedName: 'Acoustic'}
  // ];

  constructor(private collectionService: CollectionService,
    private overlayService: OverlayService) { }

  get myPlaylists(){
    return this.collectionService.getUserCollection();
  }
  ngOnInit() {
    // this.myPlaylists = this.collectionService.getUserCollection();
  }

  onOpenNewPlaylistOverlay(){
    this.overlayService.toggleOverlay(true);
  }

}
