import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pizza } from 'src/app/Models/pizza.model';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})
export class PizzaEditComponent implements OnInit {

  public id: string;
  public pizza: Pizza;



  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];

    });

    this.apiService.GetPizza(this.id).subscribe( (data: Pizza) => {
      this.pizza = data;
    } );
  }

}
