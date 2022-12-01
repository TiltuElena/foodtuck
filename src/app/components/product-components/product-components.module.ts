import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSortComponent } from './product-sort/product-sort.component';
import {RouterModule} from "@angular/router";
import {ProductDetailsService} from "./config/product-details.service";
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ProductFilterComponent, ProductListComponent, ProductSortComponent, ProductDetailComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductFilterComponent, ProductListComponent, ProductSortComponent, ProductDetailComponent],
  providers: [ProductDetailsService]
})
export class ProductComponentsModule {}
