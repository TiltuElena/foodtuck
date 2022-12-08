import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}
  private categoriesUrl = 'http://localhost:1337/api/product-categories';
  private productUrl = 'http://localhost:1337/api/product-filter-products';
  private productListUrl = 'http://localhost:1337/api/product-lists';

  getProductCategories() {
    return this.http.get(this.categoriesUrl);
  }

  getProducts() {
    return this.http.get(this.productUrl);
  }

  getProductList() {
    return this.http.get(this.productListUrl);
  }

  getProductById(id: number){
    return this.http.get(this.productListUrl +'/'+ id);
  }
}
