import { Component, OnInit } from '@angular/core';
import { PageRoutes } from '../../../ts/enum';
import { PostsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  menuLink = PageRoutes.Menu;

  socialMedias: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/facebook.png',
      text: 'https://www.facebook.com/',
    },
    {
      id: 2,
      imgUrl: 'assets/icons/twitter.png',
      text: 'https://www.twitter.com/"',
    },
    {
      id: 3,
      imgUrl: 'assets/icons/pinterest.png',
      text: 'https://www.pinterest.com/',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
