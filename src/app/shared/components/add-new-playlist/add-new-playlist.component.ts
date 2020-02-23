import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-new-playlist',
  templateUrl: './add-new-playlist.component.html',
  styleUrls: ['./add-new-playlist.component.less']
})
export class AddNewPlaylistComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
