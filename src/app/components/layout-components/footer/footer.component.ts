import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { LayoutDetailsService } from '../config/layout-details.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  optionLinks1: PostsInterface[] = [];
  optionLinks2: PostsInterface[] = [];
  posts: PostsInterface[] = [];
  socialMedias: PostsInterface[] = [];

  constructor(private httpService: LayoutDetailsService) {}

  // catchError(e: any) {
  //   console.log(e);
  // }

  ngOnInit(): void {
    this.httpService.getOptionLinks1().subscribe((response: any) => {
      for (let product of response.data) {
        this.optionLinks1.push(product.attributes);
      }
    });

    this.httpService.getOptionLinks2().subscribe((response: any) => {
      for (let product of response.data) {
        this.optionLinks2.push(product.attributes);
      }
    });

    this.httpService.getPosts().subscribe((response: any) => {
      for (let product of response.data) {
        this.posts.push(product.attributes);
      }
    });

    this.httpService.getSocialMedias().subscribe((response: any) => {
      for (let product of response.data) {
        this.socialMedias.push(product.attributes);
      }
    });
  }
}
