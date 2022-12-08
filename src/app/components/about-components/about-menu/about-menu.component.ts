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
  menuItems: PostsInterface[] = [];

  constructor(private httpService: AboutDetailsService) {}

  ngOnInit(): void {
    this.httpService.getAboutMenuItems().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.menuItems.push(product.attributes);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
