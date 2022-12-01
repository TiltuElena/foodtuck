import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponentsModule} from "@/components/product-components/product-components.module";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ProductComponentsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
