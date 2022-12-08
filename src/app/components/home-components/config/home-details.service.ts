import { Injectable } from '@angular/core';
import { FormFieldsInterface, PostsInterface } from '@/ts/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeDetailsService {
  constructor(private http: HttpClient) {}

  private iconsUrl = 'http://localhost:1337/api/home-icons';
  private foodUrl = 'http://localhost:1337/api/home-foods';
  private socialMediaUrl = 'http://localhost:1337/api/home-social-medias';
  private optionsUrl = 'http://localhost:1337/api/home-options';
  private reviewsUrl = 'http://localhost:1337/api/home-reviews';

  getHomeIcons() {
    return this.http.get(this.iconsUrl);
  }

  getHomeFood() {
    return this.http.get(this.foodUrl);
  }

  getHomeSocialMedia() {
    return this.http.get(this.socialMediaUrl);
  }

  getHomeOptions() {
    return this.http.get(this.optionsUrl);
  }

  getHomeReviews() {
    return this.http.get(this.reviewsUrl);
  }
}
