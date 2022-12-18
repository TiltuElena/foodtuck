import { Component, OnInit } from '@angular/core';
import { LinkInterface } from '@/ts/interfaces';
import { PageRoutes } from '@/ts/enum';
import { LayoutDetailsService } from '../config/layout-details.service';
import { CartDetailsService } from '@/components/cart-components/config/cart-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links: LinkInterface[] = [];

  constructor(
    private linkList: LayoutDetailsService,
    private cartService: CartDetailsService
  ) {}

  //count: number = this.cartService.getCartQuantity || 0;

  countProducts() {
    return this.cartService.CartQuantity || 0;
  }

  CardUrl(): string {
    return PageRoutes.Cart;
  }

  LoginUrl(): string {
    return PageRoutes.Login;
  }

  ngOnInit() {
    this.links = this.linkList.links;
  }
}
