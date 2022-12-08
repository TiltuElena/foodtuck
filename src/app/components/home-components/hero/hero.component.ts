import { Component, OnInit } from '@angular/core';
import { PageRoutes } from '@/ts/enum';
import { PostsInterface } from '@/ts/interfaces';
import { HomeDetailsService } from '../config/home-details.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  menuLink = PageRoutes.Menu;
  socialMedias: PostsInterface[] = [];

  constructor(private httpService: HomeDetailsService) {}

  ngOnInit(): void {
    this.httpService.getHomeSocialMedia().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.socialMedias.push(product.attributes);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
