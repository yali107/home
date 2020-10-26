import { Component, OnInit, ViewChild } from '@angular/core';
import { Typewriter } from 't-writer.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @ViewChild('tw') typewriterElement;

  constructor() { }

  ngOnInit() {
    const target = this.typewriterElement.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
    })
    writer.type('hi')
  }

}
