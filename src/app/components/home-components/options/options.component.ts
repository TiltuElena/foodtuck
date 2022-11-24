import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  options: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/icon1.png',
      text: 'Professional Chefs',
      nr: '420'
    },
    {
      id: 2,
      imgUrl: 'assets/icons/icon2.png',
      text: 'Items Of Food',
      nr: '320'
    },
    {
      id: 3,
      imgUrl: 'assets/icons/icon3.png',
      text: 'Years Of Experienced',
      nr: '30+'
    },
    {
      id: 4,
      imgUrl: 'assets/icons/icon4.png',
      text: 'Happy Customers',
      nr: '220'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
