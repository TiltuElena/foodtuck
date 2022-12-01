import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsInterface } from '@/ts/interfaces';
import { CartComponentsModule } from '@/components/cart-components/cart-components.module';
import { CartDetailsService } from '@/components/cart-components/config/cart-details.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartComponentsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartDetailsService],
})
export class CartComponent implements OnInit {
  public products: PostsInterface[] = [];
  cartTotal: number = 0;
  shipping: number = 5.15;
  total: number = 0;

  getTotalPrice(totalPrice: string) {
    this.cartTotal += Number(totalPrice);
    this.total = this.cartTotal + this.shipping;

    if (this.cartTotal === 0) {
      this.total = 0;
    }
  }

  constructor(private productList: CartDetailsService) {}
  ngOnInit() {
    this.products = this.productList.products;
  }
}
