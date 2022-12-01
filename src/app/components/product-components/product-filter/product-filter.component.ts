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
    private productList: ProductDetailsService
  ) {}

  ngOnInit(): void {
    this.products = this.productList.products;
    this.categories = this.categoryList.categories;

    const slider: any = document.getElementById('vol');
    const output: any = document.getElementById('output');

    output!.textContent = slider!.value;
    slider!.oninput = () => (output!.textContent = slider.value);
  }
}
