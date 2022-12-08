import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { HomeDetailsService } from '../config/home-details.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  options: PostsInterface[] = [];

  constructor(private httpService: HomeDetailsService) {}

  ngOnInit(): void {
    this.httpService.getHomeOptions().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.options.push(product.attributes);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
