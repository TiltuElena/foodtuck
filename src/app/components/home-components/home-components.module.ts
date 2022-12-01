import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FoodCategoryComponent } from './food-category/food-category.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { OptionsComponent } from './options/options.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HomeDetailsService } from './config/home-details.service';

@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    FoodCategoryComponent,
    ChooseUsComponent,
    OptionsComponent,
    TestimonyComponent,
  ],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [
    HeroComponent,
    AboutComponent,
    FoodCategoryComponent,
    ChooseUsComponent,
    OptionsComponent,
    TestimonyComponent,
  ],
  providers: [HomeDetailsService],
})
export class HomeComponentsModule {}
