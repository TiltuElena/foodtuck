import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
  disabled: boolean = false;
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
}
