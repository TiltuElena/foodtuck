import { Component, OnInit } from '@angular/core';
import { FoodCategoryInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.scss'],
})
export class AboutPartnersComponent implements OnInit {

  partners: FoodCategoryInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/cooperate1.png',
    },
    {
      id: 2,
      imgUrl: 'assets/icons/cooperate2.png',
    },
    {
      id: 3,
      imgUrl: 'assets/icons/cooperate3.png',
    },
    {
      id: 4,
      imgUrl: 'assets/icons/cooperate4.png',
    },
    {
      id: 5,
      imgUrl: 'assets/icons/cooperate5.png',
    },
    {
      id: 6,
      imgUrl: 'assets/icons/cooperate6.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
