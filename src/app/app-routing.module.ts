import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';

// const routes: Routes = [
//   {
//     path: '',
//     // redirectTo: '',
//     component: CockpitLayoutComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: './layouts/cockpit-layout/cockpit-layout.module#CockpitLayoutModule'
//       }
//     ]
//   },
// ];
const routes: Routes = [
  { path: 'aboutMe', component: AboutMeComponent },
  { path: '', component: HomepageComponent },
  { path: 'personalProjects', component: PersonalProjectsComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
