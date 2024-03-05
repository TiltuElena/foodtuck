import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { ProductDetailsService } from '../config/product-details.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  //categories: PostsInterface[] = [];
  //products: PostsInterface[] = [];
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
      name: 'Pizza',
      price: '$35.00',
    },
    {
      id: 2,
      imgUrl: 'assets/images/menuImg4.png',
      name: 'Burger',
      price: '$30.00',
    },
    {
      id: 3,
      imgUrl: 'assets/images/menuImg8.png',
      name: 'Sandwich',
      price: '$25.00',
    },
    {
      id: 4,
      imgUrl: 'assets/images/menuImg1.png',
      name: 'Salad',
      price: '$20.00',
    },
  ];


  constructor(
    private categoryList: ProductDetailsService,
    private productList: ProductDetailsService,
    private httpService: ProductDetailsService
  ) {}

  ngOnInit(): void {
   // this.products = this.productList.products;
   // this.categories = this.categoryList.categories;

    // this.httpService.getProductCategories().subscribe(
    //   (response: any) => {
    //     for (let product of response.data) {
    //       this.categories.push(product.attributes);
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    //
    // this.httpService.getProducts().subscribe(
    //   (response: any) => {
    //     for (let product of response.data) {
    //       this.products.push(product.attributes);
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    const slider: any = document.getElementById('vol');
    const output: any = document.getElementById('output');

    output!.textContent = slider!.value;
    slider!.oninput = () => (output!.textContent = slider.value);
  }
}
