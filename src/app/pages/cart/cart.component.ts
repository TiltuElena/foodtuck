import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponentsModule } from '@/components/cart-components/cart-components.module';
import { CartDetailsService } from '@/components/cart-components/config/cart-details.service';
import { PageRoutes } from '@/ts/enum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartComponentsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartDetailsService],
})

export class CartComponent implements OnInit {
  cartTotal: number = 0;
  shipping: number = 0;
  total: number = 0;
  menu = PageRoutes.Menu;
  products: any = [];

  constructor(public cartDetail: CartDetailsService) {
    this.cartDetail.items$
      .subscribe((product: any) => {
        this.products = [...product];
      });
  }

  get totalPrice() {
    return this.products.reduce(
      (acc: number, product: any) =>
        (acc += Number(product.nr) * Number(product.quantity)),
      0
    );
  }

  get totalPriceWithShipping() {
    if (this.totalPrice === 0) {
      return 0;
    }
    return this.totalPrice + this.shipping;
  }

  finishOrder() {
    alert(`Your order is ready! Total price: $${this.totalPriceWithShipping}`);
  }

  ngOnInit() {
    this.shipping = this.cartDetail.shipping;
  }
}
