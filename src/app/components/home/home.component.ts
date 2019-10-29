import { Component, OnInit, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('changeOpacity', [
      state('initial', style({
        opacity:'-1'
      })),
      state('final', style({
        opacity:'1'

      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class HomeComponent implements AfterViewInit {
  currentState = 'initial';

  constructor(private router :Router,private cdr: ChangeDetectorRef ) { }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  ngAfterViewInit(){
    this.changeState();
    this.cdr.detectChanges();

  }

  logout(){
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    this.router.navigate(['/login'])
  }
}
