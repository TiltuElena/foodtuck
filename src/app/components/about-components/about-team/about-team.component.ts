import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss'],
})
export class AboutTeamComponent implements OnInit {
  teamMembers: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/chef1.png',
      text: 'Ataur Rahman',
      nr: 'Chef',
    },
    {
      id: 2,
      imgUrl: 'assets/images/chef2.png',
      text: 'Marau Amarel',
      nr: 'Chef',
    },
    {
      id: 3,
      imgUrl: 'assets/images/chef3.png',
      text: 'Jorina Begum',
      nr: 'Chef',
    },
    {
      id: 4,
      imgUrl: 'assets/images/chef4.png',
      text: 'Kets William Roy',
      nr: 'Chef',
    },
    {
      id: 5,
      imgUrl: 'assets/images/chef5.png',
      text: 'Motin Molladsf',
      nr: 'Chef',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
