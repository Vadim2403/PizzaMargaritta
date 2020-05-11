
import { NotLoginGuard } from './guards/notLogin.guard';
import { AdminGuard } from './guards/admin.guard';



import { UserManagerComponent } from './Areas/admin-area/Components/user-manager/user-manager.component';
import { DashboardComponent } from './Areas/admin-area/Components/dashboard/dashboard.component';

import { NotFoundComponent } from './NotFound/NotFound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAreaComponent } from './Areas/admin-area/admin-area.component';
import { WhislistComponentComponent } from './WhislistComponent/WhislistComponent.component';
import { PizzaManagerComponent } from './Areas/admin-area/Components/pizza-manager/pizza-manager.component';
import { CreatorComponent } from './Creator/Creator.component';
import { UserEditComponent } from './Areas/admin-area/Components/user-manager/UserEdit/UserEdit.component';
import { PizzaEditComponent } from './Pizza/pizza-edit/pizza-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [NotLoginGuard] },
  { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [NotLoginGuard]  },
  { path: 'whishlist', component: WhislistComponentComponent, pathMatch: 'full'},
  { path: 'ingredients', component: CreatorComponent, pathMatch: 'full'},


  {
    path: 'admin-panel',
    component: AdminAreaComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'user-manager', component: UserManagerComponent, pathMatch: 'full' },
      { path: 'pizza-manager', component: PizzaManagerComponent, children: [
        {path: 'pizza-edit/:id', component: PizzaEditComponent, pathMatch: 'full'}
      ]},
      { path: 'edit-user/:id', component: UserEditComponent, pathMatch: 'full' }
    ]
  },




  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
