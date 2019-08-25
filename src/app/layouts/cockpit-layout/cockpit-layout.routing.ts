import { Routes } from '@angular/router';

import { AboutMeComponent } from '../../pages/about-me/about-me.component';
import { HomepageComponent } from '../../pages/homepage/homepage.component';
import { PersonalProjectsComponent } from '../../pages/personal-projects/personal-projects.component';

export const CockpitLayoutRoutes: Routes = [
    { path: 'aboutMe', component: AboutMeComponent },
    { path: '', component: HomepageComponent },
    { path: 'personalProjects', component: PersonalProjectsComponent }
]
