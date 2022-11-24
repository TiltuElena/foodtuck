import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '../../../ts/interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: PostsInterface[] = [
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
      nr: '$28.00'
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
      nr: '$45.00'
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
      nr: '$43.00'
    },
    {
      id: 7,
      imgUrl: 'assets/images/menuImg7.png',
      text: 'Cheese Butter',
      nr: '$10.00'
    },
    {
      id: 8,
      imgUrl: 'assets/images/menuImg8.png',
      text: 'Sandwiches',
      nr: '$25.00'
    },
    {
      id: 9,
      imgUrl: 'assets/images/menuImg9.png',
      text: 'Chicken Soup',
      nr: '$12.00'
    },
    {
      id: 10,
      imgUrl: 'assets/images/menuImg4.png',
      text: 'Country Burger',
      nr: '$45.00'
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
      nr: '$43.00'
    },
    {
      id: 13,
      imgUrl: 'assets/images/menuImg7.png',
      text: 'Cheese Butter',
      nr: '$10.00'
    },
    {
      id: 14,
      imgUrl: 'assets/images/menuImg8.png',
      text: 'Sandwiches',
      nr: '$25.00'
    },
    {
      id: 15,
      imgUrl: 'assets/images/menuImg9.png',
      text: 'Chicken Soup',
      nr: '$12.00'
    },
  ];

  constructor(private route: ActivatedRoute) {}
  productIds = this.products.map(({ id }) => id);
  id:number = 0;

  ngOnInit(): void {
    // console.log(this.productIds)
    // this.route.paramMap.subscribe(data => {
    //   console.log(data)
      // this.getProductById( params['id']);
      // this.id = data['id'];
    // });
  }

  // getProductById(id:number){
  //   this.productIds.map(i=> {this.id = i; })
  // }
}
