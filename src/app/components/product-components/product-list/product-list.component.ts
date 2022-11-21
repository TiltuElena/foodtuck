import { Component, OnInit } from '@angular/core';
import { OptionsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: OptionsInterface[] = [
    {
      id: 1,
      imageUrl: 'assets/images/menuImg1.png',
      text: 'Fresh Salad',
      nr: '$38.00',
      pastNr: '$45.00',
    },
    {
      id: 2,
      imageUrl: 'assets/images/menuImg2.png',
      text: 'Chocolate muffin',
      nr: '$28.00'
    },
    {
      id: 3,
      imageUrl: 'assets/images/menuImg3.png',
      text: 'Burger',
      nr: '$21.00',
      pastNr: '$45.00',
    },
    {
      id: 4,
      imageUrl: 'assets/images/menuImg4.png',
      text: 'Country Burger',
      nr: '$45.00'
    },
    {
      id: 5,
      imageUrl: 'assets/images/menuImg5.png',
      text: 'Drink',
      nr: '$23.00',
      pastNr: '$45.00',
    },
    {
      id: 6,
      imageUrl: 'assets/images/menuImg6.png',
      text: 'Pizza',
      nr: '$43.00'
    },
    {
      id: 7,
      imageUrl: 'assets/images/menuImg7.png',
      text: 'Cheese Butter',
      nr: '$10.00'
    },
    {
      id: 8,
      imageUrl: 'assets/images/menuImg8.png',
      text: 'Sandwiches',
      nr: '$25.00'
    },
    {
      id: 9,
      imageUrl: 'assets/images/menuImg9.png',
      text: 'Chicken Soup',
      nr: '$12.00'
    },
    {
      id: 10,
      imageUrl: 'assets/images/menuImg4.png',
      text: 'Country Burger',
      nr: '$45.00'
    },
    {
      id: 11,
      imageUrl: 'assets/images/menuImg5.png',
      text: 'Drink',
      nr: '$23.00',
      pastNr: '$45.00',
    },
    {
      id: 12,
      imageUrl: 'assets/images/menuImg6.png',
      text: 'Pizza',
      nr: '$43.00'
    },
    {
      id: 13,
      imageUrl: 'assets/images/menuImg7.png',
      text: 'Cheese Butter',
      nr: '$10.00'
    },
    {
      id: 14,
      imageUrl: 'assets/images/menuImg8.png',
      text: 'Sandwiches',
      nr: '$25.00'
    },
    {
      id: 15,
      imageUrl: 'assets/images/menuImg9.png',
      text: 'Chicken Soup',
      nr: '$12.00'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
