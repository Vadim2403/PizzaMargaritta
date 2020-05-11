
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/Models/pizza.model';
import { Ingredient } from 'src/app/Models/ingredient.model';
import { templateJitUrl } from '@angular/compiler';
import { ApiService } from 'src/app/core/api.service';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class CustomPizzaService {

constructor(private http: HttpClient, private apiSevice: ApiService) {}
  custompizzas:Pizza[] = [];
  ingredientsToone: Ingredient[];
  

  CreatePizza(ingredients: Ingredient[]){
    alert("in create pizza");
    this.ingredientsToone = ingredients;
    var counter = this.custompizzas.length + 1;
    var temp:Pizza = new Pizza();
     temp.id = "custom_"+counter;
     temp.name = "Your custom pizza #"+counter;
     var totalprice = 0;
     for(var i = 0; i < this.ingredientsToone.length; i++){
         totalprice = totalprice + this.ingredientsToone[i].price;
     }
     temp.price = totalprice;
     temp.description = "Pizza which was created by you";
     temp.image = "https://st3.depositphotos.com/5299014/13824/v/1600/depositphotos_138241406-stock-illustration-beautiful-pizza-painted-in-a.jpg";
    
     this.custompizzas.push(temp);
     this.apiSevice.AddPizza(temp).subscribe(data=>{
        if(data.status === 200){

        }
     }, error =>{console.log(error);});
     
  }
  SharePizzas(){
      return this.custompizzas;
  }
}