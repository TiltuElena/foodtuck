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

  constructor(private optionList: HomeDetailsService) {}

  ngOnInit(): void {
    this.options = this.optionList.options;
  }
}
