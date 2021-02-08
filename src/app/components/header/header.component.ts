import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'HOME', class: '' },
  { path: '/portfolio', title: 'PORTFOLIO', class: '' },
  { path: '/blog', title: 'BLOG', class: '' },
  { path: '/about', title: 'ABOUT', class: '' },
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
