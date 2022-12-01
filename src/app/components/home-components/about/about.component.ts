import { Component, OnInit } from '@angular/core';
import { PageRoutes } from '@/ts/enum';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutLink = PageRoutes.About;

  constructor() {}

  ngOnInit(): void {}
}
