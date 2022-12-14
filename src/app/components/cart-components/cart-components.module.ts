import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductComponent } from './cart-product/cart-product.component';
import { CartDetailsService } from './config/cart-details.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CartProductComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [CartProductComponent],
  providers: [CartDetailsService],
})
export class CartComponentsModule {}
