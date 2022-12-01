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

  constructor(
    private optionList1: LayoutDetailsService,
    private optionList2: LayoutDetailsService,
    private postList: LayoutDetailsService,
    private socialMediaList: LayoutDetailsService
  ) {}

  ngOnInit(): void {
    this.optionLinks1 = this.optionList1.optionLinks1;
    this.optionLinks2 = this.optionList2.optionLinks2;
    this.posts = this.postList.posts;
    this.socialMedias = this.socialMediaList.socialMedias;
  }
}
