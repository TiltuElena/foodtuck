import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartDetailsService } from '@/components/cart-components/config/cart-details.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Output() totalPrice = new EventEmitter<any>();
  @Input() item: any;

  total: number = 0;
  intermediary: number = 0;
  disabled: boolean = false;
  count: number = 0;

  constructor(private cartService: CartDetailsService) {}

  ngOnInit(): void {
    this.count = this.item.quantity;
    this.total = this.item.quantity * this.item.nr;
    this.intermediary = this.total;
    this.getTotal();
  }

  decrease() {
    if (this.count === 0) {
      this.disabled = true;
    } else {
      this.count = this.count - 1;
      this.cartService.updateQuantity(this.item, this.count);
      this.total = Number(this.total) - Number(this.item.nr);
      this.intermediary = -this.item.nr;
    }
    if (this.count < 1){
      this.cartService.removeFromCart(this.item);
      window.location.reload();
    }
  }

  increase() {
    this.disabled = false;
    this.count = this.count + 1;
    this.cartService.updateQuantity(this.item, this.count);
    this.total = Number(this.item.nr) + Number(this.total);
    this.intermediary = this.item.nr;
  }

  getTotal() {
    if (!this.disabled) {
      this.totalPrice.emit(this.intermediary);
    }
  }

  removeItem() {
    this.cartService.removeFromCart(this.item);
    window.location.reload();
  }
}
