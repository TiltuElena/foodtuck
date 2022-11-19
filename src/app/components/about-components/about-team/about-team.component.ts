import { Component, OnInit } from '@angular/core';
import { OptionsInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss'],
})
export class AboutTeamComponent implements OnInit {
  teamMembers: OptionsInterface[] = [
    {
      id: 1,
      imageUrl: 'assets/images/chef1.png',
      text: 'Ataur Rahman',
      nr: 'Chef',
    },
    {
      id: 2,
      imageUrl: 'assets/images/chef2.png',
      text: 'Marau Amarel',
      nr: 'Chef',
    },
    {
      id: 3,
      imageUrl: 'assets/images/chef3.png',
      text: 'Jorina Begum',
      nr: 'Chef',
    },
    {
      id: 4,
      imageUrl: 'assets/images/chef4.png',
      text: 'Kets William Roy',
      nr: 'Chef',
    },
    {
      id: 5,
      imageUrl: 'assets/images/chef5.png',
      text: 'Motin Molladsf',
      nr: 'Chef',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
