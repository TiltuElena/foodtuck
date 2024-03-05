import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { PageRoutes } from '@/ts/enum';
import { AboutDetailsService } from '../config/about-details.service';

@Component({
  selector: 'app-about-menu',
  templateUrl: './about-menu.component.html',
  styleUrls: ['./about-menu.component.scss'],
})
export class AboutMenuComponent implements OnInit {
  menuLink = PageRoutes.Menu;
 // menuItems: PostsInterface[] = [];
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
  constructor(private httpService: AboutDetailsService) {}

  ngOnInit(): void {
    // this.httpService.getAboutMenuItems().subscribe(
    //   (response: any) => {
    //     for (let product of response.data) {
    //       this.menuItems.push(product.attributes);
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
