import { Component, OnInit } from '@angular/core';
import { PostsInterface, FormFieldsInterface } from '@/ts/interfaces';
import { HomeDetailsService } from '../config/home-details.service';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.scss'],
})
export class ChooseUsComponent implements OnInit {
 // icons: PostsInterface[] = [];

  constructor(private httpService: HomeDetailsService) {}
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
  ngOnInit(): void {
    // this.httpService.getHomeIcons().subscribe((response: any) => {
    //   for (let product of response.data) {
    //     this.icons.push(product.attributes);
    //   }
    // });
  }
}
