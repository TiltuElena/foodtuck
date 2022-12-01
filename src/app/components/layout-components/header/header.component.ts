import { Component, OnInit } from '@angular/core';
import { LinkInterface } from '@/ts/interfaces';
import { PageRoutes } from '@/ts/enum';
import { LayoutDetailsService } from '../config/layout-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit{
  links: LinkInterface[] = [];

  constructor(private linkList: LayoutDetailsService) {}

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
