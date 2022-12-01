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

  constructor(private socialMediaList: HomeDetailsService) {}

  ngOnInit(): void {
    this.socialMedias = this.socialMediaList.socialMedias;
  }
}
