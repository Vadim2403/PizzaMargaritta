
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/Models/pizza.model';
import { Ingredient } from 'src/app/Models/ingredient.model';
import { templateJitUrl } from '@angular/compiler';
import { ApiService } from 'src/app/core/api.service';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { notifierCustomConfigFactory } from 'angular-notifier';
import { v4 as uuidv4 } from 'uuid';
import { NzTreeHigherOrderServiceToken } from 'ng-zorro-antd';
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
     temp.id = uuidv4();
     temp.name = "Your custom pizza #"+counter;
     var totalprice = 0;
     temp.description = "Pizza which was created by you \n Filling:\n";
     for(var i = 0; i < this.ingredientsToone.length; i++){
         totalprice = totalprice + this.ingredientsToone[i].price;
         temp.description += (this.ingredientsToone[i].name + ", ");
     }
     temp.price = totalprice;
     temp.image = "https://st3.depositphotos.com/5299014/13824/v/1600/depositphotos_138241406-stock-illustration-beautiful-pizza-painted-in-a.jpg";
    
     this.custompizzas.push(temp);
     this.apiSevice.AddPizzaCustoms(temp).subscribe(data => {
      if(data.status === 200){
        alert("Harasho")
      }
     }, error =>{console.log(error)})
     this.apiSevice.AddPizzaToWhishList(temp.id,this.apiSevice.getCurrentUserId()).subscribe(data=>{
        if(data.status === 200){
          alert("Harasho2")
        }
     }, error =>{console.log(error)});
     
  }
  SharePizzas(){
      return this.custompizzas;
  }
}