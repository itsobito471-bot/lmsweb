import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-trending-courses',
  templateUrl: './trending-courses.component.html',
  styleUrls: ['./trending-courses.component.css']
})
export class TrendingCoursesComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Use a slight delay to ensure DOM is ready
    setTimeout(() => {
      const cards = document.querySelectorAll('.course-card');

      if (cards.length > 0) {
        gsap.from('.course-card', {
          scrollTrigger: {
            trigger: 'app-trending-courses',
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          },
          y: 30,
          scale: 0.95,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'all' // Clear props after animation completes
        });
      }
    }, 100);
  }
}
