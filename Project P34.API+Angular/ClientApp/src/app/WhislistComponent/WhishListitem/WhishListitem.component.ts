import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/Models/pizza.model';
import { ApiService } from 'src/app/core/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-WhishListitem',
  templateUrl: './WhishListitem.component.html',
  styleUrls: ['./WhishListitem.component.css']
})
export class WhishListitemComponent implements OnInit {

  // @Input() whishlistPizza: Pizza;
  constructor(private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,) { }

  ngOnInit() {
  }
  // removeFromWhishList(){
  //   this.spinner.show();
  //   this.apiService.removeFromWishList(this.whishlistPizza.id).subscribe(data =>{
  //     if ( data.status == 200){
  //       this.notifier.notify('success', "Deleted");
  //     }
  //     this.ngOnInit();
  //     this.spinner.hide();
  //   });
  // }

}
