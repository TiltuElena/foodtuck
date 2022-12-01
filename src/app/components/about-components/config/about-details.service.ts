import { Injectable } from '@angular/core';
import { FormFieldsInterface, PostsInterface } from '@/ts/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AboutDetailsService {
  public partners: FormFieldsInterface[] = [
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

  public teamMembers: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/chef1.png',
      text: 'Ataur Rahman',
      nr: 'Chef',
    },
    {
      id: 2,
      imgUrl: 'assets/images/chef2.png',
      text: 'Marau Amarel',
      nr: 'Chef',
    },
    {
      id: 3,
      imgUrl: 'assets/images/chef3.png',
      text: 'Jorina Begum',
      nr: 'Chef',
    },
    {
      id: 4,
      imgUrl: 'assets/images/chef4.png',
      text: 'Kets William Roy',
      nr: 'Chef',
    },
    {
      id: 5,
      imgUrl: 'assets/images/chef5.png',
      text: 'Motin Molladsf',
      nr: 'Chef',
    },
  ];

  public menuItems: PostsInterface[] = [
    {
      id: 1,
      name: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      nr: '560 CAL',
      price: '32$',
    },
    {
      id: 2,
      name: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      nr: '560 CAL',
      price: '32$',
    },
    {
      id: 3,
      name: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      nr: '560 CAL',
      price: '32$',
    },
    {
      id: 4,
      name: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      nr: '560 CAL',
      price: '32$',
    },
    {
      id: 5,
      name: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      nr: '560 CAL',
      price: '32$',
    },
    {
      id: 6,
      name: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      nr: '560 CAL',
      price: '32$',
    },
    {
      id: 7,
      name: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      nr: '560 CAL',
      price: '32$',
    },
    {
      id: 8,
      name: 'Alder Grilled Chinook Salmon',
      text: 'Toasted French bread topped with romano, cheddar',
      nr: '560 CAL',
      price: '32$',
    },
  ];

  public items: PostsInterface[] = [
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
}
