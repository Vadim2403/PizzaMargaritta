import { Component, OnInit } from '@angular/core';
import { TileRouterLink } from 'src/app/Models/tile-router-link';

@Component({
  selector: 'app-pizza-manager',
  templateUrl: './pizza-manager.component.html',
  styleUrls: ['./pizza-manager.component.css']
})
export class PizzaManagerComponent implements OnInit {

  list: TileRouterLink[] = [new TileRouterLink('PizzaTable', 'Piasasdsad', 'admin-panel/pizza-manager/pizza-table'), new TileRouterLink('Create new pizza', 'laps', 'admin-panel/pizza-manager/create-pizza')];

  constructor() { }

  ngOnInit() {
  }

}
