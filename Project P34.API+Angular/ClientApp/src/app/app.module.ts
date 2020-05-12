import { UserManagerComponent } from './Areas/admin-area/Components/user-manager/user-manager.component';
import { DashboardComponent } from './Areas/admin-area/Components/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminAreaComponent } from './Areas/admin-area/admin-area.component';
import { UserAreaComponent } from './Areas/user-area/user-area.component';
import { PizzaListComponent } from './Pizza/pizza-list/pizza-list.component';
import { PizzaItemComponent } from './Pizza/pizza-list/pizza-item/pizza-item.component';
import { WhislistComponentComponent } from './WhislistComponent/WhislistComponent.component';
import { PizzaCreateComponent } from './Pizza/pizza-create/pizza-create.component';
import { PizzaManagerComponent } from './Areas/admin-area/Components/pizza-manager/pizza-manager.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { CreatorComponent } from './Creator/Creator.component';
import { IngredientItemComponent } from './Creator/ingredient-item/ingredient-item.component';
import { DemoNgZorroAntdModule } from './ng-zoro-antd.module';
import { UserEditComponent } from './Areas/admin-area/Components/user-manager/UserEdit/UserEdit.component';
import { PizzaForAdminListComponent } from './Pizza/pizza-for-admin-list/pizza-for-admin-list.component';
import { PizzaEditComponent } from './Pizza/pizza-edit/pizza-edit.component';
import { TileRouterLinkListComponent } from './tile-router-link-list/tile-router-link-list.component';
import { TileRouterLinkItemComponent } from './tile-router-link-list/tile-router-link-item/tile-router-link-item.component';
const notifierOptions: NotifierOptions = {
  position: {horizontal: { position: 'right' }, vertical: { position: 'top' }}
};

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      RegisterComponent,
      NotFoundComponent,
      AdminAreaComponent,
      UserAreaComponent,
      DashboardComponent,
      UserManagerComponent,
      PizzaListComponent,
      PizzaItemComponent,
      WhislistComponentComponent,
      PizzaCreateComponent,
      PizzaManagerComponent,
      CreatorComponent,
      IngredientItemComponent,
      CreatorComponent,
      UserEditComponent,
      PizzaForAdminListComponent,
      PizzaEditComponent,
      TileRouterLinkListComponent,
      TileRouterLinkItemComponent,
   ],
   imports: [
      BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
      HttpClientModule,
      FormsModule,
      AppRoutingModule,
      NotifierModule.withConfig(notifierOptions),
      BrowserAnimationsModule,
      NgxSpinnerModule,
      DemoNgZorroAntdModule,

   ],




  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})

export class AppModule { }
