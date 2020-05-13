import { Component, OnInit } from '@angular/core';
import { TileRouterLink } from 'src/app/Models/tile-router-link';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  list: TileRouterLink[] = [new TileRouterLink('🧑UserManager🧑', 'Piasasdsad', 'admin-panel/user-manager'),
   new TileRouterLink('🍕PizzaManager🍕', 'laps', 'admin-panel/pizza-manager')];

  constructor() { }

  ngOnInit() {
  }

}
