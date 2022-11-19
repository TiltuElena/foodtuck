import { Component, OnInit } from '@angular/core';
import {PageRoutes} from "../../../ts/enum";

@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.scss']
})
export class AboutHeroComponent implements OnInit {

  menuLink = PageRoutes.Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
