import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/Models/ingredient.model';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.css']
})
export class IngredientCreateComponent implements OnInit {

  public ingredientModel: Ingredient = new Ingredient();
  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private router: Router) { }

  ngOnInit() {
  }
  createIngredient(){
    this.apiService.CreateIngredient(this.ingredientModel).subscribe( data => {
      if(data.status === 200){
        this.notifier.notify('success', 'Added successfully');
      } else {
        this.notifier.notify('error', 'Error');
      }
    });
  }

}
