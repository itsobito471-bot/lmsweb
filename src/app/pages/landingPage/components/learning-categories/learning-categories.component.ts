import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-learning-categories',
  templateUrl: './learning-categories.component.html',
  styleUrls: ['./learning-categories.component.css']
})
export class LearningCategoriesComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Use a slight delay to ensure DOM is ready
    setTimeout(() => {
      const cards = document.querySelectorAll('.category-card');

      if (cards.length > 0) {
        gsap.from('.category-card', {
          scrollTrigger: {
            trigger: 'app-learning-categories',
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'back.out(1.3)',
          clearProps: 'all' // Clear props after animation completes
        });
      }
    }, 100);
  }
}
