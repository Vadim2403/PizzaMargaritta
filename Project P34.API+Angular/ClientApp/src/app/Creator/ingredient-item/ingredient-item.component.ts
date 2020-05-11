import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/Models/ingredient.model';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css']
})
export class IngredientItemComponent implements OnInit {

  @Input() ingredient: Ingredient;
  @Output() public outToParent = new EventEmitter();
  @Input() btnText: string;
  constructor() { }

  ngOnInit() {
  }

  sendToParent(id : string) {
    
    this.outToParent.emit(id);
  }

}
