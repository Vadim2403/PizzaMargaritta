import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Pizza } from 'src/app/Models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  public pizzas: Pizza[];

  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private router: Router
    ) { }

  ngOnInit() {
    this.spinner.show();
    this.apiService.GetPizzas().subscribe((data: Pizza[]) => {
      this.pizzas = data;
      this.spinner.hide();
    });
  }

}
