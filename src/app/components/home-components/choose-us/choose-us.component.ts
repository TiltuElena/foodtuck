import { Component, OnInit } from '@angular/core';
import { PostsInterface} from '../../../ts/interfaces';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.scss'],
})
export class ChooseUsComponent implements OnInit {

  icons: PostsInterface[] = [
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
  constructor() {}

  ngOnInit(): void {}
}
