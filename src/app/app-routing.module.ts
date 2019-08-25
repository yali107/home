import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CockpitLayoutComponent } from './layouts/cockpit-layout/cockpit-layout.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '',
    component: CockpitLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/cockpit-layout/cockpit-layout.module#CockpitLayoutModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
