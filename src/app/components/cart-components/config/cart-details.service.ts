import { Injectable } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartDetailsService {
  constructor() {}

  public products: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/cartImg1.png',
      reviewStar: 'assets/icons/lessStarIcon.png',
      price: '35.00',
      name: 'Burger',
    },
    {
      id: 2,
      imgUrl: 'assets/images/cartImg2.png',
      reviewStar: 'assets/icons/lessStarIcon.png',
      price: '55.00',
      name: 'Fresh Lime',
    },
    {
      id: 3,
      imgUrl: 'assets/images/cartImg3.png',
      reviewStar: 'assets/icons/lessStarIcon.png',
      price: '15.00',
      name: 'Donuts',
    },
    {
      id: 4,
      imgUrl: 'assets/images/cartImg4.png',
      reviewStar: 'assets/icons/lessStarIcon.png',
      price: '45.00',
      name: 'Chocolate Muffin',
    },
    {
      id: 5,
      imgUrl: 'assets/images/cartImg5.png',
      reviewStar: 'assets/icons/lessStarIcon.png',
      price: '15.00',
      name: 'Chicken Soup',
    },
  ];
}
