import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSortComponent } from './product-sort/product-sort.component';

@NgModule({
  declarations: [ProductFilterComponent, ProductListComponent, ProductSortComponent],
  imports: [CommonModule],
  exports: [ProductFilterComponent, ProductListComponent, ProductSortComponent],
})
export class ProductComponentsModule {}
