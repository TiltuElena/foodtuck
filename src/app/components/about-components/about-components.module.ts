import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPartnersComponent } from './about-partners/about-partners.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutChooseUsComponent } from './about-choose-us/about-choose-us.component';
import {AboutMenuComponent} from "./about-menu/about-menu.component";
import {RouterModule} from "@angular/router";
import { AboutHeroComponent } from './about-hero/about-hero.component';

@NgModule({
  declarations: [
    AboutPartnersComponent,
    AboutTeamComponent,
    AboutChooseUsComponent,
    AboutMenuComponent,
    AboutHeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutPartnersComponent,
    AboutTeamComponent,
    AboutChooseUsComponent,
    AboutMenuComponent,
    AboutHeroComponent
  ]
})

export class AboutComponentsModule { }
