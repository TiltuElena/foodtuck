import { Component, OnInit } from '@angular/core';
import { LinkInterface } from '@/ts/interfaces';
import { PageRoutes } from '@/ts/enum';
import { LayoutDetailsService } from '../config/layout-details.service';
import { CartDetailsService } from '@/components/cart-components/config/cart-details.service';
import {share} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  links: LinkInterface[] = [];
  total: any = 0;

  constructor(
    private linkList: LayoutDetailsService,
    public cartService: CartDetailsService
  ) {}

  CardUrl(): string {
    return PageRoutes.Cart;
  }

  LoginUrl(): string {
    return PageRoutes.Login;
  }

  ngOnInit() {
    this.links = this.linkList.links;

    // this.cartService.items$.pipe(share()).subscribe((items:any) => {
    //   this.total = [...items].length
    // })
  }
}
