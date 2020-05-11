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
  constructor() { }

  ngOnInit() {
  }

  sendToParent(id : string) {
    alert("Id from child " + id);
    this.outToParent.emit(id);
  }

}
