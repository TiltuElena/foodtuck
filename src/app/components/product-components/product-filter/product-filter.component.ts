import { Component, OnInit } from '@angular/core';
import { LinkOptionInterface, PostsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  categories: LinkOptionInterface[] = [
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

  products: PostsInterface[] = [
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

  constructor() {}

  ngOnInit(): void {
    const slider: any = document.getElementById('vol');
    const output: any = document.getElementById('output');

    output!.textContent = slider!.value;
    slider!.oninput = () => (output!.textContent = slider.value);
  }
}
