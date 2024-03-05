import { Component, OnInit } from '@angular/core';
import {FormFieldsInterface, PostsInterface} from '@/ts/interfaces';
import { HomeDetailsService } from '../config/home-details.service';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.scss'],
})
export class FoodCategoryComponent implements OnInit {
  //foods: FormFieldsInterface[] = [];
  public foods: FormFieldsInterface[] = [
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

  constructor(private httpService: HomeDetailsService) {}

  ngOnInit(): void {
    // this.httpService.getHomeFood().subscribe(
    //   (response: any) => {
    //     for (let product of response.data) {
    //       this.foods.push(product.attributes);
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
