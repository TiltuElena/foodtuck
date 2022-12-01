import { Injectable } from '@angular/core';
import { FormFieldsInterface, PostsInterface } from '@/ts/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HomeDetailsService {
  public icons: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/hamburgerIcon.png',
      text: 'Fast Food',
    },
    {
      id: 2,
      imgUrl: 'assets/icons/cookieIcon.png',
      text: 'Lunch',
    },
    {
      id: 3,
      imgUrl: 'assets/icons/wineicon.png',
      text: 'Dinner',
    },
  ];

  public foods: FormFieldsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/choose1.png',
    },
    {
      id: 2,
      imgUrl: 'assets/images/choose2.png',
    },
    {
      id: 3,
      imgUrl: 'assets/images/choose3.png',
    },
    {
      id: 4,
      imgUrl: 'assets/images/choose4.png',
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
      imgUrl: 'assets/icons/twitter.png',
      text: 'https://www.twitter.com/"',
    },
    {
      id: 3,
      imgUrl: 'assets/icons/pinterest.png',
      text: 'https://www.pinterest.com/',
    },
  ];

  public options: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/icon1.png',
      text: 'Professional Chefs',
      nr: '420',
    },
    {
      id: 2,
      imgUrl: 'assets/icons/icon2.png',
      text: 'Items Of Food',
      nr: '320',
    },
    {
      id: 3,
      imgUrl: 'assets/icons/icon3.png',
      text: 'Years Of Experienced',
      nr: '30+',
    },
    {
      id: 4,
      imgUrl: 'assets/icons/icon4.png',
      text: 'Happy Customers',
      nr: '220',
    },
  ];

  public reviews: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/user2.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam\n' +
        '        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit\n' +
        '        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis\n' +
        '        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in\n' +
        '        consequat.',
      reviewStar: 'assets/icons/stars.png',
      name: 'Anne Gold',
      subText: 'Customer',
    },
    {
      id: 2,
      imgUrl: 'assets/images/user4.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, elit\n' +
        '        augue urna, vitae pretium donec id elementum. Ultrices mattis\n' +
        '        A alias aliquam aliquid architecto aspernatur culpa deleniti\n ' +
        '        explicabo iure laboriosam libero minus, molestias nemo nulla obcaecati quaerat\n ' +
        '        rem suscipit vero. Lacus nisi, et ac dapibus sit eu velit in\n' +
        '        consequat.',
      reviewStar: 'assets/icons/stars.png',
      name: 'Alamin Hasan',
      subText: 'Food Specialist',
    },
    {
      id: 3,
      imgUrl: 'assets/images/user3.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam um. Urna, elit\n' +
        '        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis\n' +
        '        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in\n' +
        '        consequat.',
      reviewStar: 'assets/icons/stars.png',
      name: 'John Holmes',
      subText: 'Nutritionist',
    },
  ];
  constructor() {}
}
