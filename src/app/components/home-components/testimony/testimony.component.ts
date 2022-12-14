import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { HomeDetailsService } from '../config/home-details.service';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss'],
})
export class TestimonyComponent implements OnInit {
  selectedIndex: number = 0;
  reviews: PostsInterface[] = [];

  constructor(private httpService: HomeDetailsService) {}

  ngOnInit(): void {
    this.httpService.getHomeReviews().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.reviews.push(product.attributes);
        }
      },
      (error) => {
        console.log(error);
      }
    );

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
