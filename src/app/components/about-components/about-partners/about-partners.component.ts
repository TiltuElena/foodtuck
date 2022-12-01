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

  constructor(private partnerList: AboutDetailsService) {}

  ngOnInit(): void {
    this.partners = this.partnerList.partners;
  }
}
