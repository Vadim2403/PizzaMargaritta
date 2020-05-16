import { Component, OnInit } from '@angular/core';
import { TileRouterLink } from 'src/app/Models/tile-router-link';

@Component({
  selector: 'app-pizza-manager-router',
  templateUrl: './pizza-manager-router.component.html',
  styleUrls: ['./pizza-manager-router.component.css']
})
export class PizzaManagerRouterComponent implements OnInit {

  list: TileRouterLink[] = [new TileRouterLink('🍕PizzaTable🍕', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla varius commodo. Praesent convallis consequat elit ut egestas. Donec non. ', 'admin-panel/pizza-manager/pizza-table'),
   new TileRouterLink('🍕Create new pizza🍕', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla varius commodo. Praesent convallis consequat elit ut egestas. Donec non. ', 'admin-panel/pizza-manager/create-pizza'),
   new TileRouterLink('🍗Create new ingredient🍗', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla varius commodo. Praesent convallis consequat elit ut egestas. Donec non. ', 'admin-panel/pizza-manager/create-ingredient')];

  constructor() { }

  ngOnInit() {
  }

}
