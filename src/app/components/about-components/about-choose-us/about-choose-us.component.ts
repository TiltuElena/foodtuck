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

  constructor(private itemList: AboutDetailsService) {}

  ngOnInit(): void {
    this.items = this.itemList.items;
  }
}
