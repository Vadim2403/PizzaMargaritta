import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
import { ApiService } from '../core/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Size } from 'ngx-spinner/lib/ngx-spinner.enum';

@Component({
  selector: 'app-Creator',
  templateUrl: './Creator.component.html',
  styleUrls: ['./Creator.component.css']
})
export class CreatorComponent implements OnInit {
 
  public ingredients: Ingredient[];
  public choosed: Ingredient[];
  public idOFclicked: string;
  public toBascket : Ingredient;
  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private router: Router) { }

  ngOnInit() {
    this.spinner.show();
    this.apiService.GetIngrdients().subscribe((data: Ingredient[]) => {
      this.ingredients = data;
      this.spinner.hide();
    });
  }
  receiveFromChild(event : string){
    alert(event);
    this.idOFclicked = event;
    this.toBascket = this.ingredients.find(x => x.id == this.idOFclicked);
    // this.choosed.push(this.toBascket); <--- нерабоче гавно
    alert("If ти see це message це means що this частина of code не work");
    }
}
