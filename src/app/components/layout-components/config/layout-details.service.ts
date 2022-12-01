import { Injectable } from '@angular/core';
import {LinkInterface, PostsInterface} from "@/ts/interfaces";
import {PageRoutes} from "@/ts/enum";

@Injectable({
  providedIn: 'root'
})

export class LayoutDetailsService {
  public optionLinks1: PostsInterface[] = [
    {
      id: 1,
      text: 'About',
    },
    {
      id: 2,
      text: 'News',
    },
    {
      id: 3,
      text: 'Partners',
    },
    {
      id: 4,
      text: 'Team',
    },
    {
      id: 5,
      text: 'Menu',
    },
    {
      id: 6,
      text: 'Contacts',
    },
  ];

  public optionLinks2: PostsInterface[] = [
    {
      id: 1,
      text: 'FAQ',
    },
    {
      id: 2,
      text: 'Term & conditions',
    },
    {
      id: 3,
      text: 'Reporting',
    },
    {
      id: 4,
      text: 'Documentation',
    },
    {
      id: 5,
      text: 'Support Policy',
    },
    {
      id: 6,
      text: 'Privacy',
    },
  ];

  public posts: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/footerImg1.png',
      date: '20 Feb 2022',
      text: 'Keep Your Business',
    },
    {
      id: 2,
      imgUrl: 'assets/images/footerImg2.png',
      date: '20 Feb 2022',
      text: 'Keep Your Business',
    },
    {
      id: 3,
      imgUrl: 'assets/images/footerImg3.png',
      date: '20 Feb 2022',
      text: 'Keep Your Business',
    },
  ];
  public socialMedias: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/facebook.png',
      text: 'https://www.facebook.com/',
    },
    {
      id: 2,
      imgUrl: 'assets/icons/twitter (2).png',
      text: 'https://www.twitter.com/',
    },
    {
      id: 3,
      imgUrl: 'assets/icons/instagram.png',
      text: 'https://www.instagram.com/',
    },
    {
      id: 4,
      imgUrl: 'assets/icons/youtube.png',
      text: 'https://www.youtube.com/',
    },
    {
      id: 5,
      imgUrl: 'assets/icons/pinterest.png',
      text: 'https://www.pinterest.com/',
    },
  ];
  readonly links: LinkInterface[] = [
    {
      to: PageRoutes.Home,
      text: 'Home',
    },
    {
      to: PageRoutes.Menu,
      text: 'Menu',
    },
    {
      to: PageRoutes.About,
      text: 'About',
    },
  ];
  constructor() { }
}
