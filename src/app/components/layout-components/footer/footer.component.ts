import { Component, OnInit } from '@angular/core';
import { PostsInterface } from '@/ts/interfaces';
import { LayoutDetailsService } from '../config/layout-details.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  //optionLinks1: PostsInterface[] = [];
  //optionLinks2: PostsInterface[] = [];
  //posts: PostsInterface[] = [];
  //socialMedias: PostsInterface[] = [];
  public optionLinks1: PostsInterface[] = [
    {
      id: 1,
      text: 'About',
    },
    {
      id: 2,
      text: 'News',
    },
    {
      id: 3,
      text: 'Partners',
    },
    {
      id: 4,
      text: 'Team',
    },
    {
      id: 5,
      text: 'Menu',
    },
    {
      id: 6,
      text: 'Contacts',
    },
  ];

  public optionLinks2: PostsInterface[] = [
    {
      id: 1,
      text: 'FAQ',
    },
    {
      id: 2,
      text: 'Term & conditions',
    },
    {
      id: 3,
      text: 'Reporting',
    },
    {
      id: 4,
      text: 'Documentation',
    },
    {
      id: 5,
      text: 'Support Policy',
    },
    {
      id: 6,
      text: 'Privacy',
    },
  ];

  public posts: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/images/footerImg1.png',
      date: '20 Feb 2022',
      text: 'Keep Your Business',
    },
    {
      id: 2,
      imgUrl: 'assets/images/footerImg2.png',
      date: '20 Feb 2022',
      text: 'Keep Your Business',
    },
    {
      id: 3,
      imgUrl: 'assets/images/footerImg3.png',
      date: '20 Feb 2022',
      text: 'Keep Your Business',
    },
  ];
  public socialMedias: PostsInterface[] = [
    {
      id: 1,
      imgUrl: 'assets/icons/facebook.png',
      text: 'https://www.facebook.com/',
    },
    {
      id: 2,
      imgUrl: 'assets/icons/twitter (2).png',
      text: 'https://www.twitter.com/',
    },
    {
      id: 3,
      imgUrl: 'assets/icons/instagram.png',
      text: 'https://www.instagram.com/',
    },
    {
      id: 4,
      imgUrl: 'assets/icons/youtube.png',
      text: 'https://www.youtube.com/',
    },
    {
      id: 5,
      imgUrl: 'assets/icons/pinterest.png',
      text: 'https://www.pinterest.com/',
    }
]
  constructor(private httpService: LayoutDetailsService) {}

  // catchError(e: any) {
  //   console.log(e);
  // }

  ngOnInit(): void {
    // this.httpService.getOptionLinks1().subscribe((response: any) => {
    //   for (let product of response.data) {
    //     this.optionLinks1.push(product.attributes);
    //   }
    // });
    //
    // this.httpService.getOptionLinks2().subscribe((response: any) => {
    //   for (let product of response.data) {
    //     this.optionLinks2.push(product.attributes);
    //   }
    // });
    //
    // this.httpService.getPosts().subscribe((response: any) => {
    //   for (let product of response.data) {
    //     this.posts.push(product.attributes);
    //   }
    // });
    //
    // this.httpService.getSocialMedias().subscribe((response: any) => {
    //   for (let product of response.data) {
    //     this.socialMedias.push(product.attributes);
    //   }
    // });
  }
}
