import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/Models/pizza.model';
import { ApiService } from 'src/app/core/api.service';
import { CustomPizzaService } from 'src/Services/CustomPizza.service';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {

  @Input() pizza: Pizza;

  constructor(private apiService: ApiService,
    private pizzaService: CustomPizzaService) { }

  ngOnInit() {

  }

  addTowhishlist(){
    this.apiService.AddPizzaToWhishList(this.pizza.id,this.apiService.getCurrentUserId()).subscribe(data=>{
      if(data.status === 200){
        alert("Added");
      }
    });}
  

}
