import { Injectable } from '@angular/core';
import { LinkInterface } from '@/ts/interfaces';
import { PageRoutes } from '@/ts/enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class LayoutDetailsService {
  constructor(private http: HttpClient) {}
  private optionLinks1Url = 'http://localhost:1337/api/option1-links';
  private optionLinks2Url = 'http://localhost:1337/api/footer-option2-links';
  private postsUrl = 'http://localhost:1337/api/footer-posts';
  private socialMediaUrl = 'http://localhost:1337/api/footer-social-medias';

  getOptionLinks1() {
    return this.http.get(this.optionLinks1Url);
  }

  getOptionLinks2() {
    return this.http.get(this.optionLinks2Url);
  }

  getPosts() {
    return this.http.get(this.postsUrl);
  }

  getSocialMedias() {
    return this.http.get(this.socialMediaUrl);
  }

  readonly links: LinkInterface[] = [
    {
      to: PageRoutes.Home,
      text: 'Home',
    },
    {
      to: PageRoutes.Menu,
      text: 'Menu',
    },
    {
      to: PageRoutes.About,
      text: 'About',
    },
  ];
}
