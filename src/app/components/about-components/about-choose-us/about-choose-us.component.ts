import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-about-choose-us',
  templateUrl: './about-choose-us.component.html',
  styleUrls: ['./about-choose-us.component.scss'],
})

export class AboutChooseUsComponent implements OnInit {

  items: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/studentIcon.png',
      text: 'Best Chef',
      nr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat ',
    },
    {
      id: 2,
      imgUrl: 'assets/icons/cofeeIcon.png',
      text: '120 Item food',
      nr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat ',
    },
    {
      id: 3,
      imgUrl: 'assets/icons/personIcon.png',
      text: 'Clean Environment',
      nr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
