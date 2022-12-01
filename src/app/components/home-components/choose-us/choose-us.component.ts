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

  constructor(private iconList: HomeDetailsService) {}

  ngOnInit(): void {
    this.icons = this.iconList.icons;
  }
}
