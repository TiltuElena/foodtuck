import { Component, OnInit } from '@angular/core';
import { PageRoutes } from '../../../ts/enum';
import { SocialInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  menuLink = PageRoutes.Menu;

  socialMedias: SocialInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/facebook.png',
      link: 'https://www.facebook.com/',
    },
    {
      id: 2,
      imgUrl: 'assets/icons/twitter.png',
      link: 'https://www.twitter.com/"',
    },
    {
      id: 3,
      imgUrl: 'assets/icons/pinterest.png',
      link: 'https://www.pinterest.com/',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
