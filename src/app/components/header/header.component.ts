import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/aboutMe', title: 'About Me',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/myInterests', title: 'My Interests',  icon: 'ni-planet text-blue', class: '' },
  { path: '/personalProjects', title: 'Personal Projects',  icon: 'ni-pin-3 text-orange', class: '' },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.headerItems = ROUTES.filter(headerItem => headerItem);
  }
}
