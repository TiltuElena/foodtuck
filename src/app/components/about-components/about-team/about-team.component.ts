import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { AboutDetailsService } from '../config/about-details.service';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss'],
})
export class AboutTeamComponent implements OnInit {
  teamMembers: PostsInterface[] = [];

  constructor(private teamList: AboutDetailsService) {}

  ngOnInit(): void {
    this.teamMembers = this.teamList.teamMembers;
  }
}
