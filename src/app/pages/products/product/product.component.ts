import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormFieldsInterface, PostsInterface} from '@/ts/interfaces';
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
 // images: FormFieldsInterface[] = [];
  images: FormFieldsInterface[] = [
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
  constructor(
    private route: ActivatedRoute,
    private httpService: ProductDetailsService,
    private router: Router,
    private prop: ProductDetailsService,
    private cartService: CartDetailsService
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
      nr: '28.00',
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
      nr: '$23.00',
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
      nr: '$23.00',
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
    this.count = this.prop.count;
    this.images = this.prop.images;

    this.route.params.subscribe((params) => {
      this.getProductById(params['id']);
    });

    // this.httpService.getProductList().subscribe(
    //   (response: any) => {
    //     for (let product of response.data) {
    //       this.products.push(product);
    //     }
    //   }
    // );
  }

  addToCart(product: any, count: number) {
      this.cartService.addToCart(product, count);
      this.count = 1;
  }

  // getProductById(id: number) {
  //   this.httpService.getProductById(id).subscribe((data: any) => {
  //     this.product = data.data.attributes;
  //   });
  // }

  getProductById(id: number) {
    console.log(id)
    const productId = Number(id);
    this.product = this.products.find((p) => p.id === productId) || null;
    console.log(this.product)
  }

  disabled: boolean = false;
  product: any = [];
  // products: any = [];
  count: number = 1;

  decrease() {
    if (Number(this.count) === 1) {
      this.disabled = true;
    } else {
      this.count = this.count - 1;
    }
  }

  increase() {
    this.disabled = false;
    this.count = this.count + 1;
  }

  // showNextProduct() {
  //   if (this.product.id < this.products.length) {
  //     this.product.id = Number(this.product.id) + 1;
  //   } else {
  //     this.product.id = 1;
  //   }
  //   this.router.navigate(['/menu/' + this.product.id]).then();
  //   this.count = 1;
  // }
  //
  // showPreviousProduct() {
  //   if (this.product.id > 1) {
  //     this.product.id = Number(this.product.id) - 1;
  //   } else {
  //     this.product.id = this.products.length;
  //   }
  //   this.router.navigate(['/menu/' + this.product.id]).then();
  //   this.count = 1;
  // }

  showNextProduct() {
    const currentIndex = this.products.findIndex((p) => p.id === this.product.id);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= this.products.length) {
      nextIndex = 0; // Wrap around to the first element
    }
    const nextProduct = this.products[nextIndex];
    this.router.navigate(['/menu/' + nextProduct.id]).then();
    this.count = 1;
  }

  showPreviousProduct() {
    const currentIndex = this.products.findIndex((p) => p.id === this.product.id);
    let previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
      previousIndex = this.products.length - 1; // Wrap around to the last element
    }
    const previousProduct = this.products[previousIndex];
    this.router.navigate(['/menu/' + previousProduct.id]).then();
    this.count = 1;
  }
}
