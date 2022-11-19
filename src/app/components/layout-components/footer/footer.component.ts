import { Component, OnInit } from '@angular/core';
import {
  LinkOptionInterface,
  PostsInterface,
  SocialInterface,
} from '../../../ts/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  optionLinks1: LinkOptionInterface[] = [
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

  optionLinks2: LinkOptionInterface[] = [
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

  posts: PostsInterface[] = [
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

  socialMedias: SocialInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/facebook.png',
      link: 'https://www.facebook.com/'
    },
    {
      id: 2,
      imgUrl: 'assets/icons/twitter (2).png',
      link: 'https://www.twitter.com/'
    },
    {
      id: 3,
      imgUrl: 'assets/icons/instagram.png',
      link: 'https://www.instagram.com/'
    },
    {
      id: 4,
      imgUrl: 'assets/icons/youtube.png',
      link: 'https://www.youtube.com/'
    },
    {
      id: 5,
      imgUrl: 'assets/icons/pinterest.png',
      link: 'https://www.pinterest.com/'
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
