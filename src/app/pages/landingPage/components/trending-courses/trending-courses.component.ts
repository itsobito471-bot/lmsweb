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
    setTimeout(() => {
      const container = document.querySelector('.horizontal-scroll-container');
      const cards = document.querySelector('.horizontal-scroll-cards');

      if (container && cards) {
        const cardsElement = cards as HTMLElement;
        const containerWidth = window.innerWidth;
        const totalWidth = cardsElement.scrollWidth;

        // Only enable horizontal scroll if content is wider than viewport
        if (totalWidth > containerWidth) {
          // Add generous padding to ensure last card is fully visible
          const paddingRight = Math.max(containerWidth * 0.5, 500); // 50% of viewport or 500px minimum
          cardsElement.style.paddingRight = `${paddingRight}px`;

          // Recalculate after adding padding
          const newTotalWidth = cardsElement.scrollWidth;
          const scrollWidth = newTotalWidth - containerWidth;

          gsap.to(cards, {
            x: -scrollWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top 20%',
              end: () => `+=${scrollWidth + 500}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true
            }
          });
        } else {
          // If content fits in viewport, center it instead
          cardsElement.style.justifyContent = 'center';
        }
      }
    }, 100);
  }
}
