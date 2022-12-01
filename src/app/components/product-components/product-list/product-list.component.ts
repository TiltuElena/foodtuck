import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductDetailsService } from '../config/product-details.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: PostsInterface[] = [];
  constructor(
    private route: ActivatedRoute,
    private productList: ProductDetailsService
  ) {}
  productIds = this.products.map(({ id }) => id);
  id: number = 0;

  ngOnInit(): void {
    this.products = this.productList.productList;
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
