import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartDetailsService {
  constructor() {
    let items: any = localStorage.getItem('cartProducts');

    if (items) {
      this.items$ = new BehaviorSubject(JSON.parse(items));
    }
  }

  public shipping: number = 5.15;
  public items$: any = new Subject();

  addToCart(product: any, count: number) {
    let items: any = localStorage.getItem('cartProducts') || [];
    const newItem: any = product;
    newItem.quantity = count;

    if (items) {
      items = JSON.parse(localStorage.getItem('cartProducts') || '[]');
    }

    if (!items.some((item: any) => {return item.index === product.index})) {
      localStorage.setItem('cartProducts', JSON.stringify([...items, newItem]));
      this.items$.next([...items, newItem]);
    }
  }

  updateQuantity(product: any, count: number) {
    product.quantity = count;
    let items: any = localStorage.getItem('cartProducts') || [];

    if (items) {
      items = JSON.parse(localStorage.getItem('cartProducts') || '[]');
    }

    items.forEach((prod: any) => {
      if (prod.index === product.index) {
        prod.quantity = count;
      }
    });

    localStorage.setItem('cartProducts', JSON.stringify([...items]));
  }

  removeFromCart(product: any) {
    let items: any = localStorage.getItem('cartProducts') || [];
    if (items) {
      items = JSON.parse(localStorage.getItem('cartProducts') || '[]');
    }

    items.forEach((item: any, index: any) => {
      if (item.index === product.index) {
        items.splice(index, 1);
      }
    });

    localStorage.setItem('cartProducts', JSON.stringify([...items]));
    this.items$.next([...items]);
  }

  get CartQuantity() {
    return JSON.parse(localStorage.getItem('cartProducts') || '[]').length;
  }

  ngOnInit(): void {}
}
