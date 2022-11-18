import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPartnersComponent } from './about-partners/about-partners.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutChooseUsComponent } from './about-choose-us/about-choose-us.component';

@NgModule({
  declarations: [
    AboutPartnersComponent,
    AboutTeamComponent,
    AboutChooseUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPartnersComponent,
    AboutTeamComponent,
    AboutChooseUsComponent
  ]
})

export class AboutComponentsModule { }
