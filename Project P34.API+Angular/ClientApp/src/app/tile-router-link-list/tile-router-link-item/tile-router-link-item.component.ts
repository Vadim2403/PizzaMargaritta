import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TileRouterLink } from 'src/app/Models/tile-router-link';

@Component({
  selector: 'app-tile-router-link-item',
  templateUrl: './tile-router-link-item.component.html',
  styleUrls: ['./tile-router-link-item.component.css']
})
export class TileRouterLinkItemComponent implements OnInit {

  @Input()model: TileRouterLink;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  redirect(){
    this.router.navigate([this.model.url]);
  }

}
