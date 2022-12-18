import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Injectable({
  providedIn: 'root',
})
export class CartDetailsService {
  constructor(private http: HttpClient) {}
  public shipping: number = 5.15;

  items: any = [...JSON.parse(localStorage.getItem('cartProducts')!)];
  productList = new BehaviorSubject<any>([]);

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: any, count: number) {
    for (let item of this.items) {
      if (item.name === product.name) {
        item.quantity += count;
        return;
      }
    }
    this.updateQuantity(product, count);
    this.items.push(product);
    this.productList.next(this.items);
    this.addToLocalStorage();
    //return this.items.push(product);
  }

  removeFromCart(product: any) {
    this.items.forEach((item: any, index: any) => {
      if (item.index === product.index) {
        this.items.splice(index, 1);
      }
    });
    this.productList.next(this.items);
    this.addToLocalStorage();
  }

  addToLocalStorage() {
    localStorage.setItem('cartProducts', JSON.stringify(this.items));
  }

  updateQuantity(product: any, count: number) {
    for (let item of this.items) {
      if (item.index === product.index) {
        item.quantity = count;
      }
    }
    product.quantity = count;
    this.addToLocalStorage();
  }

  get CartQuantity() {
    return JSON.parse(localStorage.getItem('cartProducts')!).length;
  }

  ngOnInit(): void {}
}
