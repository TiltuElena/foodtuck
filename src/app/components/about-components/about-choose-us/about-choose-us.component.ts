import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { AboutDetailsService } from '../config/about-details.service';

@Component({
  selector: 'app-about-choose-us',
  templateUrl: './about-choose-us.component.html',
  styleUrls: ['./about-choose-us.component.scss'],
})
export class AboutChooseUsComponent implements OnInit {
  //items: PostsInterface[] = [];
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
  constructor(private httpService: AboutDetailsService) {}

  ngOnInit(): void {
    // this.httpService.getAboutItems().subscribe(
    //   (response: any) => {
    //     for (let product of response.data) {
    //       this.items.push(product.attributes);
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
