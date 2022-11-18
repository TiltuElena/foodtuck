import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutes } from '../../../ts/enum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  linkHome = PageRoutes.Home;

  constructor() {}

  ngOnInit(): void {}
}
