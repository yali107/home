import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';


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
  { path: 'about', component: AboutMeComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
