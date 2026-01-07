import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Use a slight delay to ensure DOM is ready
    setTimeout(() => {
      const cards = document.querySelectorAll('.testimonial-card');

      if (cards.length > 0) {
        gsap.from('.testimonial-card', {
          scrollTrigger: {
            trigger: 'app-testimonials',
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          clearProps: 'all' // Clear props after animation completes
        });
      }
    }, 100);
  }
}
