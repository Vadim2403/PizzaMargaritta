import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
import { ApiService } from '../core/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Size } from 'ngx-spinner/lib/ngx-spinner.enum';
import { CustomPizzaService } from 'src/Services/CustomPizza.service';

@Component({
  selector: 'app-Creator',
  templateUrl: './Creator.component.html',
  styleUrls: ['./Creator.component.css']
})
export class CreatorComponent implements OnInit {
 
  public ingredients: Ingredient[];
  public choosed: Ingredient[] = [];
  public idOFclicked: string;
  public toBascket : Ingredient;
  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private router: Router,
    private resender: CustomPizzaService) { }

  ngOnInit() {
    this.spinner.show();
    this.apiService.GetIngrdients().subscribe((data: Ingredient[]) => {
      this.ingredients = data;
      this.spinner.hide();
    });
  }
  receiveFromChild(event : string){
    this.idOFclicked = event;
    this.toBascket = this.ingredients.find(x => x.id == this.idOFclicked);
    if(this.toBascket != null){
    this.choosed.push(this.toBascket);
    var idshka = this.ingredients.indexOf(this.toBascket);
    this.ingredients.splice(idshka,1);
    }
    else{
      this.toBascket = this.choosed.find(x => x.id == this.idOFclicked);
      this.ingredients.push(this.toBascket);
      var idshka = this.choosed.indexOf(this.toBascket);
      this.choosed.splice(idshka,1);
    }

    }
    Send(){
      this.resender.CreatePizza(this.choosed);
    }
}
