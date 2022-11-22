import { Component, OnInit } from '@angular/core';
import { ReviewInterface } from '../../../ts/interfaces';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss'],
})
export class TestimonyComponent implements OnInit {
  selectedIndex: number = 0;

  reviews: ReviewInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/user2.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam\n' +
        '        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit\n' +
        '        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis\n' +
        '        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in\n' +
        '        consequat.',
      reviewStar: 'assets/icons/stars.png',
      name: 'Anne Gold',
      userF: 'Customer',
    },
    {
      id: 2,
      imgUrl: 'assets/images/user4.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, elit\n' +
        '        augue urna, vitae pretium donec id elementum. Ultrices mattis\n' +
        '        A alias aliquam aliquid architecto aspernatur culpa deleniti\n ' +
        '        explicabo iure laboriosam libero minus, molestias nemo nulla obcaecati quaerat\n ' +
        '        rem suscipit vero. Lacus nisi, et ac dapibus sit eu velit in\n' +
        '        consequat.',
      reviewStar: 'assets/icons/stars.png',
      name: 'Alamin Hasan',
      userF: 'Food Specialist',
    },
    {
      id: 3,
      imgUrl: 'assets/images/user3.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam um. Urna, elit\n' +
        '        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis\n' +
        '        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in\n' +
        '        consequat.',
      reviewStar: 'assets/icons/stars.png',
      name: 'John Holmes',
      userF: 'Nutritionist',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.autoSlideReviews();
  }

  autoSlideReviews(): void {
    setInterval(() => {
      this.autoChangeSlide();
    }, 5000);
  }

  autoChangeSlide(): void {
    if (this.selectedIndex === this.reviews.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  selectReview(index: number): void {
    this.selectedIndex = index;
  }
}
