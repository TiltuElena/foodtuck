import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartDetailsService {
  constructor() {}
  public shipping: number = 5.15;
  items: any = [...JSON.parse(localStorage.getItem('cartProducts')!)];

  getProducts() {
    return this.items;
  }

  addToCart(product: any, count: number) {
    for (let item of this.items) {
      if (item.index === product.index) {
        item.quantity += count;
        this.addToLocalStorage();
        return;
      }
    }
    this.updateQuantity(product, count);
    this.items.push(product);
    this.addToLocalStorage();
  }

  removeFromCart(product: any) {
    this.items.forEach((item: any, index: any) => {
      if (item.index === product.index) {
        this.items.splice(index, 1);
      }
    });
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
