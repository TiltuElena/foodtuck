import { Component, OnInit } from '@angular/core';
import { FormFieldsInterface } from '@/ts/interfaces';
import {AboutDetailsService} from "../config/about-details.service";

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.scss'],
})
export class AboutPartnersComponent implements OnInit {

  partners: FormFieldsInterface[] = [];

  constructor(private httpService: AboutDetailsService) {
  }

  ngOnInit(): void {
    this.httpService.getAboutPartners().subscribe(
      (response: any) => {
        for (let product of response.data) {
          this.partners.push(product.attributes);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
