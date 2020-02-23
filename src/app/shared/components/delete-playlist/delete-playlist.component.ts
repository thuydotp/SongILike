import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-playlist',
  templateUrl: './delete-playlist.component.html',
  styleUrls: ['./delete-playlist.component.less']
})
export class DeletePlaylistComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
