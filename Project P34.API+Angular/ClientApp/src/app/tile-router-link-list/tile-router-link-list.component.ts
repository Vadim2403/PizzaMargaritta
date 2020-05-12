import { Component, OnInit, Input } from '@angular/core';
import { TileRouterLink } from '../Models/tile-router-link';

@Component({
  selector: 'app-tile-router-link-list',
  templateUrl: './tile-router-link-list.component.html',
  styleUrls: ['./tile-router-link-list.component.css']
})
export class TileRouterLinkListComponent implements OnInit {

  @Input() list: TileRouterLink[];

  constructor() { }

  ngOnInit() {
  }

}
