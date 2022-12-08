import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { ProductDetailsService } from '../config/product-details.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  categories: PostsInterface[] = [];
  products: PostsInterface[] = [];

  constructor(
    private categoryList: ProductDetailsService,
    private productList: ProductDetailsService,
    private httpService: ProductDetailsService
  ) {}

  ngOnInit(): void {
   // this.products = this.productList.products;
   // this.categories = this.categoryList.categories;

    this.httpService.getProductCategories().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.categories.push(product.attributes);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.httpService.getProducts().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.products.push(product.attributes);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    const slider: any = document.getElementById('vol');
    const output: any = document.getElementById('output');

    output!.textContent = slider!.value;
    slider!.oninput = () => (output!.textContent = slider.value);
  }
}
