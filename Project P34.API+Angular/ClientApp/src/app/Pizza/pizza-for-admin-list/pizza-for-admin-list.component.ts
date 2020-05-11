import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Pizza } from 'src/app/Models/pizza.model';
import { ApiService } from 'src/app/core/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-for-admin-list',
  templateUrl: './pizza-for-admin-list.component.html',
  styleUrls: ['./pizza-for-admin-list.component.css']
})
export class PizzaForAdminListComponent implements OnInit {

  public pizzas: Pizza[];

  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private router: Router) { }

  ngOnInit() {
    this.spinner.show();
    this.apiService.GetPizzas().subscribe((data: Pizza[]) => {
      this.pizzas = data;
      this.spinner.hide();
    });
  }

  deletePizza(id: string){
    this.spinner.show();
    this.apiService.DeletePizza(id).subscribe(data =>{
      if ( data.status !== 200){
        this.notifier.notify('error', 'Error');
      }
      this.ngOnInit();
      this.spinner.hide();
    });

  }

}
