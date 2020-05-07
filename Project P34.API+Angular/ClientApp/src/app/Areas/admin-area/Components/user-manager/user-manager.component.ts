import { Component, OnInit } from '@angular/core';
import { UserItem } from '../../Models/user-item.model';
import { UserManagerService } from '../../Services/User-Manager.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { ApiResult } from 'src/app/Models/result.model';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  constructor(private userService: UserManagerService,
              private spinner: NgxSpinnerService,
              private notifier: NotifierService) { }
  listOfData: UserItem[] = [];

  deleteUser(id : string){
    this.spinner.show();

    this.userService.removeUser(id).subscribe(

      (data: ApiResult) => {
        if(data.status == 200)
        {
        this.notifier.notify('succes', "User removed");
        
        }
        else{
          for(var i = 0; i < data.errors; i++){
            this.notifier.notify('error',data.errors[i]);
          }
        }
        this.spinner.hide();
      }

    );
  }

  ngOnInit(): void {
    this.spinner.show();

    this.userService.getAllUsers().subscribe(

      (allUsers: UserItem[]) => {
        this.listOfData = allUsers;
        this.spinner.hide();
      }

    );

  }

}
