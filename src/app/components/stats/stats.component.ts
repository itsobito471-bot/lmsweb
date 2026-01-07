import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stat-item',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 50,
      scale: 0.5,
      rotation: -5,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(2)' // Strong bounce
    });
  }
}
