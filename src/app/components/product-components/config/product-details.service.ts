import { Injectable } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  public categories: PostsInterface[] = [
    {
      id: 1,
      text: 'Sandwiches',
    },
    {
      id: 2,
      text: 'Burger',
    },
    {
      id: 3,
      text: 'Chicken Soup',
    },
    {
      id: 4,
      text: 'Drink',
    },
    {
      id: 5,
      text: 'Pizza',
    },
    {
      id: 6,
      text: 'Thi',
    },
    {
      id: 7,
      text: 'Non Veg',
    },
    {
      id: 8,
      text: 'Uncategorized',
    },
  ];

  public products: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/menuImg6.png',
      date: 'Pizza',
      text: '$35.00',
    },
    {
      id: 2,
      imgUrl: 'assets/images/menuImg4.png',
      date: 'Burger',
      text: '$30.00',
    },
    {
      id: 3,
      imgUrl: 'assets/images/menuImg8.png',
      date: 'Sandwich',
      text: '$25.00',
    },
    {
      id: 4,
      imgUrl: 'assets/images/menuImg1.png',
      date: 'Salad',
      text: '$20.00',
    },
  ];

  public productList: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/menuImg1.png',
      text: 'Fresh Salad',
      nr: '$38.00',
      pastNr: '$45.00',
    },
    {
      id: 2,
      imgUrl: 'assets/images/menuImg2.png',
      text: 'Chocolate muffin',
      nr: '$28.00',
    },
    {
      id: 3,
      imgUrl: 'assets/images/menuImg3.png',
      text: 'Burger',
      nr: '$21.00',
      pastNr: '$45.00',
    },
    {
      id: 4,
      imgUrl: 'assets/images/menuImg4.png',
      text: 'Country Burger',
      nr: '$45.00',
    },
    {
      id: 5,
      imgUrl: 'assets/images/menuImg5.png',
      text: 'Drink',
      nr: '$23.00',
      pastNr: '$45.00',
    },
    {
      id: 6,
      imgUrl: 'assets/images/menuImg6.png',
      text: 'Pizza',
      nr: '$43.00',
    },
    {
      id: 7,
      imgUrl: 'assets/images/menuImg7.png',
      text: 'Cheese Butter',
      nr: '$10.00',
    },
    {
      id: 8,
      imgUrl: 'assets/images/menuImg8.png',
      text: 'Sandwiches',
      nr: '$25.00',
    },
    {
      id: 9,
      imgUrl: 'assets/images/menuImg9.png',
      text: 'Chicken Soup',
      nr: '$12.00',
    },
    {
      id: 10,
      imgUrl: 'assets/images/menuImg4.png',
      text: 'Country Burger',
      nr: '$45.00',
    },
    {
      id: 11,
      imgUrl: 'assets/images/menuImg5.png',
      text: 'Drink',
      nr: '$23.00',
      pastNr: '$45.00',
    },
    {
      id: 12,
      imgUrl: 'assets/images/menuImg6.png',
      text: 'Pizza',
      nr: '$43.00',
    },
    {
      id: 13,
      imgUrl: 'assets/images/menuImg7.png',
      text: 'Cheese Butter',
      nr: '$10.00',
    },
    {
      id: 14,
      imgUrl: 'assets/images/menuImg8.png',
      text: 'Sandwiches',
      nr: '$25.00',
    },
    {
      id: 15,
      imgUrl: 'assets/images/menuImg9.png',
      text: 'Chicken Soup',
      nr: '$12.00',
    },
  ];
  constructor() {}
}
