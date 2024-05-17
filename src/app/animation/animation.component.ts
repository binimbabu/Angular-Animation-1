import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('toggleClick', [
      state('true', style({
        backgroundColor: 'green'
      })),
      state('false', style({
        backgroundColor: 'red'
      })),
      transition('true => false', animate('1000ms linear')),
      transition('false => true', animate('1000ms linear'))
    ])
  ]
})
export class AnimationComponent implements OnInit {
isGreen : string = 'true';
  constructor() { }

  ngOnInit(): void {
  }
  toggleColor(){
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true';
  }
}
