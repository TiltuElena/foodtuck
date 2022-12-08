import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Output() totalPrice = new EventEmitter<string>();
  @Input() item: any;

  total: number = 0;
  intermediary: number = 0;
  disabled: boolean = false;
  count: number = 0;

  constructor() {}
  ngOnInit(): void {}

  decrease() {
    if (this.count === 0) {
      this.disabled = true;
    } else {
      this.count = this.count - 1;
      this.total = Number(this.total) - Number(this.item.price);
      this.intermediary = -this.item.price;
    }
  }

  increase() {
    this.disabled = false;
    this.count = this.count + 1;
    this.total = Number(this.item.price) + Number(this.total);
    this.intermediary = this.item.price;
  }

  getTotal() {
    if (!this.disabled) {
      this.totalPrice.emit(this.intermediary.toString());
    }
  }
}
