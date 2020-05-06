import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { PizzaCreate } from 'src/app/Models/pizza-create';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.css']
})
export class PizzaCreateComponent implements OnInit {


  public pizzaModel: PizzaCreate = new PizzaCreate();
  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private router: Router) { }



  ngOnInit() {
  }

  createPizza(){
    this.apiService.AddPizza(this.pizzaModel).subscribe(data =>{
      this.spinner.show();
      if ( data.status !== 200){
        this.notifier.notify('error', data.errors[0]);
      }
      if ( data.status === 200){
        this.notifier.notify('success', 'Added succesfully');
       this.pizzaModel = new PizzaCreate();
      }
      this.spinner.hide();
    });
  }

}
