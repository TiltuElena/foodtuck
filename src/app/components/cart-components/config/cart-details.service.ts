import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartDetailsService {
  constructor(private http: HttpClient) {}
  public shipping: number = 5.15;

  items: any = [];
  localStorageData: any;
  pastItems: any = JSON.parse(localStorage.getItem('cartProducts')!);

  initializeCart(): any {
    if (this.pastItems) {
      for (let item of this.pastItems) {
        this.items.push(item);
      }
      return this.items;
    }
  }

  addToCart(product: any, count: number) {
    this.initializeCart();
    for (let item of this.items) {
      if (item.name === product.name) {
        item.quantity += count;
        return
      }
    }
    this.updateQuantity(product, count);
    return this.items.push(product);
  }

  removeFromCart(product: any){
    document.getElementById('product')!.remove();
    this.items.forEach((item: any) => {
      if (item.index === product.index) {
        this.items.splice(this.items.indexOf(product)+1, 1)
      }
    })
    this.addToLocalStorage()
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

  get getCartQuantity() {
    this.localStorageData = JSON.parse(localStorage.getItem('cartProducts')!);
    if (this.localStorageData) {
      return this.localStorageData.length;
    }
  }

  ngOnInit(): void {}
}
