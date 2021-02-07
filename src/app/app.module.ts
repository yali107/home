import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { InterestsAndHobbiesComponent } from './pages/interests-and-hobbies/interests-and-hobbies.component';
import { PreviousWorkComponent } from './pages/previous-work/previous-work.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,

    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxTypedJsModule,

    ComponentsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    // CockpitLayoutComponent,
    InterestsAndHobbiesComponent,
    PreviousWorkComponent,
    HomepageComponent,
    AboutMeComponent,
    PersonalProjectsComponent,
    PagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
