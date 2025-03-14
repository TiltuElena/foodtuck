import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { ProductDetailsService } from '../config/product-details.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  // products: PostsInterface[] = [];
  constructor(
    private httpService: ProductDetailsService
  ) {}
  public products: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/menuImg1.png',
      text: 'Fresh Salad',
      nr: 38,
      pastNr: 45,
    },
    {
      id: 2,
      imgUrl: 'assets/images/menuImg2.png',
      text: 'Chocolate muffin',
      nr: 28,
    },
    {
      id: 3,
      imgUrl: 'assets/images/menuImg3.png',
      text: 'Burger',
      nr: 21,
      pastNr: 45,
    },
    {
      id: 4,
      imgUrl: 'assets/images/menuImg4.png',
      text: 'Country Burger',
      nr: 45,
    },
    {
      id: 5,
      imgUrl: 'assets/images/menuImg5.png',
      text: 'Drink',
      nr: 23,
      pastNr: 45,
    },
    {
      id: 6,
      imgUrl: 'assets/images/menuImg6.png',
      text: 'Pizza',
      nr: 43,
    },
    {
      id: 7,
      imgUrl: 'assets/images/menuImg7.png',
      text: 'Cheese Butter',
      nr: 10,
    },
    {
      id: 8,
      imgUrl: 'assets/images/menuImg8.png',
      text: 'Sandwiches',
      nr: 25,
    },
    {
      id: 9,
      imgUrl: 'assets/images/menuImg9.png',
      text: 'Chicken Soup',
      nr: 12,
    },
    {
      id: 10,
      imgUrl: 'assets/images/menuImg4.png',
      text: 'Country Burger',
      nr: 45,
    },
    {
      id: 11,
      imgUrl: 'assets/images/menuImg5.png',
      text: 'Drink',
      nr: 23,
      pastNr: 45,
    },
    {
      id: 12,
      imgUrl: 'assets/images/menuImg6.png',
      text: 'Pizza',
      nr: 43,
    },
    {
      id: 13,
      imgUrl: 'assets/images/menuImg7.png',
      text: 'Cheese Butter',
      nr: 10,
    },
    {
      id: 14,
      imgUrl: 'assets/images/menuImg8.png',
      text: 'Sandwiches',
      nr: 25,
    },
    {
      id: 15,
      imgUrl: 'assets/images/menuImg9.png',
      text: 'Chicken Soup',
      nr: 12,
    },
  ];
  ngOnInit(): void {
    // this.httpService.getProductList().subscribe(
    //   (response: any) => {
    //     for (let product of response.data) {
    //       this.products.push(product.attributes);
    //       console.log(this.products)
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
