import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponentsModule } from '@/components/about-components/about-components.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AboutComponentsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
