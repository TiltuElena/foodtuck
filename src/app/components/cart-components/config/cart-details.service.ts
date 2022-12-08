import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartDetailsService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:1337/api/products';
  public shipping: number = 5.15;

  getPosts() {
    return this.http.get(this.url);
  }

  ngOnInit(): void {}
}
