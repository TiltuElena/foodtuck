import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { HomeDetailsService } from '../config/home-details.service';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.scss'],
})
export class ChooseUsComponent implements OnInit {
  icons: PostsInterface[] = [];

  constructor(private httpService: HomeDetailsService) {}

  ngOnInit(): void {
    this.httpService.getHomeIcons().subscribe((response: any) => {
      for (let product of response.data) {
        this.icons.push(product.attributes);
      }
    });
  }
}
