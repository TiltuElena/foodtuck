import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormFieldsInterface } from '@/ts/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  private categoriesUrl: string =
    'http://localhost:1337/api/product-categories';
  private productUrl: string =
    'http://localhost:1337/api/product-filter-products';
  private productListUrl: string = 'http://localhost:1337/api/product-lists';
  public count: number = 1;

  getProductCategories() {
    return this.http.get(this.categoriesUrl);
  }

  getProducts() {
    return this.http.get(this.productUrl);
  }

  getProductList() {
    return this.http.get(this.productListUrl);
  }

  getProductById(id: number) {
    return this.http.get(this.productListUrl + '/' + id);
  }

  public images: FormFieldsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/imgS1.png',
    },
    {
      id: 2,
      imgUrl: 'assets/images/imgS2.png',
    },
    {
      id: 3,
      imgUrl: 'assets/images/imgS3.png',
    },
    {
      id: 4,
      imgUrl: 'assets/images/imgS4.png',
    },
  ];
}
