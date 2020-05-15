import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { CustomPizzaService } from 'src/Services/CustomPizza.service';
import { Pizza } from '../Models/pizza.model';

@Component({
  selector: 'app-WhislistComponent',
  templateUrl: './WhislistComponent.component.html',
  styleUrls: ['./WhislistComponent.component.css']
})
export class WhislistComponentComponent implements OnInit {

  public WhislistPizzas : Pizza[];
  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private router: Router,
    private resender: CustomPizzaService,
    ) { }

    ngOnInit() {
      this.spinner.show();
      this.apiService.getWishList().subscribe((data: Pizza[]) => {
        this.WhislistPizzas = data;
        this.spinner.hide();
      });
    }
}
