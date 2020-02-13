import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {
  menu = [
    {id: 1, name: 'Home', segment: 'home'},
    {id: 2, name: 'Search', segment: 'search'},
    {id: 3, name: 'Collection', segment: 'collection'},
    {id: 4, name: 'Profile', segment: 'account'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
