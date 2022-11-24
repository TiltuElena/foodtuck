import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsInterface } from '../../ts/interfaces';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/cartImg1.png',
      reviewStar: 'assets/icons/lessStarIcon.png',
      text: '$35.00',
      price: '$221.00',
      name: 'Burger',
    },
    {
      id: 2,
      imgUrl: 'assets/images/cartImg2.png',
      reviewStar: 'assets/icons/lessStarIcon.png',
      text: '$55.00',
      price: '$521.00',
      name: 'Fresh Lime',
    },
    {
      id: 3,
      imgUrl: 'assets/images/cartImg3.png',
      reviewStar: 'assets/icons/lessStarIcon.png',
      text: '$15.00',
      price: '$421.00',
      name: 'Donuts',
    },
    {
      id: 4,
      imgUrl: 'assets/images/cartImg4.png',
      reviewStar: 'assets/icons/lessStarIcon.png',
      text: '$45.00',
      price: '$521.00',
      name: 'Chocolate Muffin',
    },
    {
      id: 5,
      imgUrl: 'assets/images/cartImg5.png',
      reviewStar: 'assets/icons/lessStarIcon.png',
      text: '$15.00',
      price: '$325.00',
      name: 'Chicken Soup',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
