import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // Refresh ScrollTrigger to ensure start/end positions are correct after all content loads
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }
}
