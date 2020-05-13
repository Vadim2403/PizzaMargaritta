
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
import { PizzaForAdminListComponent } from './Pizza/pizza-for-admin-list/pizza-for-admin-list.component';
import { PizzaCreateComponent } from './Pizza/pizza-create/pizza-create.component';
import { MainPageComponent } from './Areas/admin-area/MainPage/main-page/main-page.component';
import { PizzaManagerRouterComponent } from './Areas/admin-area/Components/pizza-manager/pizza-manager-router/pizza-manager-router.component';

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
      { path: '', component: MainPageComponent, pathMatch: 'full' },
      { path: 'user-manager', component: UserManagerComponent, pathMatch: 'full' },
      { path: 'pizza-manager', component: PizzaManagerComponent, children: [
        { path: '', component: PizzaManagerRouterComponent, pathMatch: 'full'},
        {path: 'pizza-edit/:id', component: PizzaEditComponent, pathMatch: 'full'},
        {path: 'pizza-table', component: PizzaForAdminListComponent, pathMatch: 'full'},
        {path: 'create-pizza', component: PizzaCreateComponent, pathMatch: 'full'}
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
