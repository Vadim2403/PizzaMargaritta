import { SignInModel } from './../Models/login.model';
import { RegisterModel } from './../Models/register.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResult } from '../Models/result.model';
import { Pizza } from '../Models/pizza.model';
import { EventEmitter } from '@angular/core';
import { PizzaCreate } from '../Models/pizza-create';
import { Ingredient } from '../Models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = '/api/Account';
  loginStatus = new EventEmitter<boolean>();
  SingUp(UserRegisterDto: RegisterModel): Observable<ApiResult> {
    return this.http.post<ApiResult>(this.baseUrl + '/register', UserRegisterDto);
  }

  SignIn(UserLoginDto: SignInModel) {
    return this.http.post<ApiResult>(this.baseUrl + '/login', UserLoginDto);
  }

  GetPizzas() {
    return this.http.get<Pizza[]>('/api/pizzas');
  }
  DeletePizza(id: string) {
    return this.http.get<ApiResult>('/api/pizzas/delete/' + id);
  }
  EditPizza(pizza: Pizza) {
    return this.http.post<ApiResult>('/api/pizzas/edit', pizza);
  }
  GetPizza(id: string): Observable<Pizza> {
    return this.http.get<Pizza>('/api/pizzas/' + id);
  }

  GetIngrdients() {
    return this.http.get<Ingredient[]>('/api/ingredients');
  }
  AddPizza(PizzaModel: PizzaCreate){
    return this.http.post<ApiResult>('/api/pizzas/addpizza', PizzaModel);
  }

  isAdmin() {
    const token = localStorage.getItem('token');
    if (token !== null) {

      const jwtData = token.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);

      if (decodedJwtData.roles === 'User') {
        return false;
      } else if (decodedJwtData.roles === 'Admin') {
        return true;
      }

    } else {
      return false;
    }
  }


  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      return true;
    } else {
      return false;
    }
  }

  Logout() {
      localStorage.removeItem('token');
      this.loginStatus.emit(false);
  }


}
