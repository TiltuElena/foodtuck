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

  constructor(private foodList: HomeDetailsService) {}

  ngOnInit(): void {
    this.foods = this.foodList.foods;
  }
}
