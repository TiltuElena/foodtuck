import { Component} from '@angular/core';
import { LinkInterface } from '../../../ts/interfaces';
import { PageRoutes } from '../../../ts/enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  readonly links: LinkInterface[] = [
    {
      to: PageRoutes.Home,
      text: 'Home',
    },
    {
      to: PageRoutes.Menu,
      text: 'Menu',
    },
    {
      to: PageRoutes.About,
      text: 'About',
    },
  ];

  constructor() {}

  CardUrl():string {
    return PageRoutes.Cart
  }

  LoginUrl():string {
    return PageRoutes.Login
  }
}
