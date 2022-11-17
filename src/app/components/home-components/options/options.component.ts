import { Component, OnInit } from '@angular/core';
import { OptionsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  options: OptionsInterface[] = [
    {
      id: 1,
      imageUrl: 'assets/icons/icon1.png',
      text: 'Professional Chefs',
      nr: '420'
    },
    {
      id: 2,
      imageUrl: 'assets/icons/icon2.png',
      text: 'Items Of Food',
      nr: '320'
    },
    {
      id: 3,
      imageUrl: 'assets/icons/icon3.png',
      text: 'Years Of Experienced',
      nr: '30+'
    },
    {
      id: 4,
      imageUrl: 'assets/icons/icon4.png',
      text: 'Happy Customers',
      nr: '220'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
