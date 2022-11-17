import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FoodCategoryComponent } from './food-category/food-category.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { OptionsComponent } from './options/options.component';
import { TestimonyComponent } from './testimony/testimony.component';

@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    FoodCategoryComponent,
    ChooseUsComponent,
    OptionsComponent,
    TestimonyComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeroComponent,
    AboutComponent,
    FoodCategoryComponent,
    ChooseUsComponent,
    OptionsComponent,
    TestimonyComponent,
  ],
})
export class HomeComponentsModule {}
