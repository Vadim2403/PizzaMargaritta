import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/Models/pizza.model';

@Component({
  selector: 'app-WhishListitem',
  templateUrl: './WhishListitem.component.html',
  styleUrls: ['./WhishListitem.component.css']
})
export class WhishListitemComponent implements OnInit {

  @Input() whishlistPizza: Pizza;
  constructor() { }

  ngOnInit() {
  }

}
