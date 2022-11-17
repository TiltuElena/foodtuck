import { Component, OnInit } from '@angular/core';
import { ChooseIconsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.scss'],
})
export class ChooseUsComponent implements OnInit {

  icons: ChooseIconsInterface[] = [
    {
      id: 1,
      iconUrl: 'assets/icons/hamburgerIcon.png',
      text: 'Fast Food',
    },
    {
      id: 2,
      iconUrl: 'assets/icons/cookieIcon.png',
      text: 'Lunch',
    },
    {
      id: 3,
      iconUrl: 'assets/icons/wineicon.png',
      text: 'Dinner',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
