import { Component, OnInit } from '@angular/core';
import { FormFieldsInterface } from '@/ts/interfaces';
import { HomeDetailsService } from '../config/home-details.service';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.scss'],
})
export class FoodCategoryComponent implements OnInit {
  foods: FormFieldsInterface[] = [];

  constructor(private httpService: HomeDetailsService) {}

  ngOnInit(): void {
    this.httpService.getHomeFood().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.foods.push(product.attributes);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
