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
    const sections = ['app-hero', 'app-stats', 'app-trending-courses', 'app-learning-categories', 'app-instructor-banner', 'app-testimonials'];

    sections.forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });
  }
}
