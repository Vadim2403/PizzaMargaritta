import { Component, OnInit } from '@angular/core';
import { TileRouterLink } from 'src/app/Models/tile-router-link';

@Component({
  selector: 'app-pizza-manager-router',
  templateUrl: './pizza-manager-router.component.html',
  styleUrls: ['./pizza-manager-router.component.css']
})
export class PizzaManagerRouterComponent implements OnInit {

  list: TileRouterLink[] = [new TileRouterLink('🍕PizzaTable🍕', 'Piasasdsad', 'admin-panel/pizza-manager/pizza-table'),
   new TileRouterLink('🍕Create new pizza🍕', 'laps', 'admin-panel/pizza-manager/create-pizza')];

  constructor() { }

  ngOnInit() {
  }

}
