import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { CockpitLayoutComponent } from './layouts/cockpit-layout/cockpit-layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    
    ComponentsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CockpitLayoutComponent,
    // HomepageComponent,
    // AboutMeComponent,
    // PersonalProjectsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
