import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  // @ViewChild(NgxTypedJsComponent) NgxTypedJsComponent;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // console.log(this.typewriterElement)
    // this.target = this.typewriterElement.nativeElement;

    // this.writer = new Typewriter(this.target, {
    //   loop: true,
    //   typeColor: 'black'
    // })
    // this.writer.type("Without washing the brush, I'm gonna go right into some Van Dyke Brown, ").rest(500).start()
  }

}
