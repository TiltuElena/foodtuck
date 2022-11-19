import { Component, OnInit } from '@angular/core';
import { MenuItemInterface } from '../../../ts/interfaces';
import { PageRoutes } from '../../../ts/enum';

@Component({
  selector: 'app-about-menu',
  templateUrl: './about-menu.component.html',
  styleUrls: ['./about-menu.component.scss'],
})
export class AboutMenuComponent implements OnInit {

  menuLink = PageRoutes.Menu;

  menuItems: MenuItemInterface[] = [
    {
      id: 1,
      header: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      subText: '560 CAL',
      price: '32$',
    },
    {
      id: 2,
      header: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      subText: '560 CAL',
      price: '32$',
    },
    {
      id: 3,
      header: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      subText: '560 CAL',
      price: '32$',
    },
    {
      id: 4,
      header: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      subText: '560 CAL',
      price: '32$',
    },
    {
      id: 5,
      header: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      subText: '560 CAL',
      price: '32$',
    },
    {
      id: 6,
      header: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      subText: '560 CAL',
      price: '32$',
    },
    {
      id: 7,
      header: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      subText: '560 CAL',
      price: '32$',
    },
    {
      id: 8,
      header: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      subText: '560 CAL',
      price: '32$',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
