import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldsInterface, PostsInterface } from '@/ts/interfaces';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '@/components/product-components/config/product-details.service';
import { RouterLink, Router } from '@angular/router';
import { CartDetailsService } from '@/components/cart-components/config/cart-details.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  images: FormFieldsInterface[] = [];

  constructor(
    private route: ActivatedRoute,
    private httpService: ProductDetailsService,
    private router: Router,
    private prop: ProductDetailsService,
    private cartService: CartDetailsService
  ) {}

  ngOnInit(): void {
    this.count = this.prop.count;
    this.images = this.prop.images;

    this.route.params.subscribe((params) => {
      this.getProductById(params['id']);
    });

    this.httpService.getProductList().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.products.push(product);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addToCart(product: any, count: number) {
    if(this.count !== 0){
      this.cartService.addToCart(product, count);
      this.cartService.addToLocalStorage();
      this.count = 0;
    }
  }

  getProductById(id: number) {
    this.httpService.getProductById(id).subscribe((data: any) => {
      this.product = data.data.attributes;
    });
  }

  disabled: boolean = false;
  product: any = [];
  products: any = [];
  count: number = 0;

  decrease() {
    if (Number(this.count) === 0) {
      this.disabled = true;
    } else {
      this.count = this.count - 1;
    }
  }

  increase() {
    this.disabled = false;
    this.count = this.count + 1;
  }

  showNextProduct() {
    if (this.product.index < this.products.length) {
      this.product.index = Number(this.product.index) + 1;
    } else {
      this.product.index = 1;
    }
    this.router.navigate(['/menu/' + this.product.index]).then();
    this.count = 0;
  }

  showPreviousProduct() {
    if (this.product.index > 1) {
      this.product.index = Number(this.product.index) - 1;
    } else {
      this.product.index = this.products.length;
    }
    this.router.navigate(['/menu/' + this.product.index]).then();
    this.count = 0;
  }
}
