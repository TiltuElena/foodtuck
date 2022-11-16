import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroComponent} from "./hero/hero.component";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HeroComponent, AboutComponent],
  imports: [CommonModule],
  exports: [HeroComponent, AboutComponent],
})
export class HomeComponentsModule {}
