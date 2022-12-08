import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { ProductDetailsService } from '../config/product-details.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: PostsInterface[] = [];
  constructor(
    private httpService: ProductDetailsService
  ) {}

  ngOnInit(): void {
    this.httpService.getProductList().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.products.push(product.attributes);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
