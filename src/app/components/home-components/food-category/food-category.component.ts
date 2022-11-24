import { Component, OnInit } from '@angular/core';
import { FormFieldsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.scss'],
})
export class FoodCategoryComponent implements OnInit {

  foods: FormFieldsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/choose1.png',
    },
    {
      id: 2,
      imgUrl: 'assets/images/choose2.png',
    },
    {
      id: 3,
      imgUrl: 'assets/images/choose3.png',
    },
    {
      id: 4,
      imgUrl: 'assets/images/choose4.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
