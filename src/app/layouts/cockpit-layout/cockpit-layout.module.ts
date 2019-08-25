import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CockpitLayoutRoutes } from './cockpit-layout.routing';
import { AboutMeComponent } from '../../pages/about-me/about-me.component';
import { PersonalProjectsComponent } from '../../pages/personal-projects/personal-projects.component';
import { HomepageComponent } from 'src/app/pages/homepage/homepage.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(CockpitLayoutRoutes),
      FormsModule,
      HttpClientModule,
      NgbModule,
    ],
    declarations: [
      AboutMeComponent,
      PersonalProjectsComponent,
      HomepageComponent,
    ]
  })
  
  export class CockpitLayoutModule {}