import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { CustomPizzaService } from 'src/Services/CustomPizza.service';
import { Pizza } from '../Models/pizza.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-WhislistComponent',
  templateUrl: './WhislistComponent.component.html',
  styleUrls: ['./WhislistComponent.component.css']
})
export class WhislistComponentComponent implements OnInit {

  public size: number;
  public WhislistPizzas : Pizza[];
  searchResult: Pizza[] = [];
  searchText: string;
  totalPrice: number = 0;

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
        this.searchResult = this.WhislistPizzas;
        this.size = this.WhislistPizzas.length;
        this.totalPrice = 0;
        for(var i = 0; i < this.searchResult.length; i++){
          this.totalPrice += this.searchResult[i].price;
        }
        this.spinner.hide();
      });
    }
    order(){
      this.spinner.show();
    this.apiService.clearWishList().subscribe(data =>{
      if ( data.status == 200){
        this.notifier.notify('success', "Ordered");
      }
      this.ngOnInit();
      this.spinner.hide();
    });
    
    }
    removeFromWhishList(id : string){
        this.spinner.show();
        this.apiService.removeFromWishList(id).subscribe(data =>{
          if ( data.status == 200){
            this.notifier.notify('success', "Deleted");
          }
          this.ngOnInit();
          this.spinner.hide();
        });
}
Search(){
  this.searchResult = this.WhislistPizzas.filter(x => x.name.includes(this.searchText) || x.description.includes(this.searchText));
}
}
