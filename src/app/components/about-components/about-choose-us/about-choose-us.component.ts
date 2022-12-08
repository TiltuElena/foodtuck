import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { AboutDetailsService } from '../config/about-details.service';

@Component({
  selector: 'app-about-choose-us',
  templateUrl: './about-choose-us.component.html',
  styleUrls: ['./about-choose-us.component.scss'],
})
export class AboutChooseUsComponent implements OnInit {
  items: PostsInterface[] = [];

  constructor(private httpService: AboutDetailsService) {}

  ngOnInit(): void {
    this.httpService.getAboutItems().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.items.push(product.attributes);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
