import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  currentIndex = 0;
  autoScrollInterval: any;

  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CPA, Big 4 Accounting',
      image: 'https://i.pravatar.cc/80?img=5',
      text: 'The financial modeling course transformed my career. I went from junior analyst to senior consultant in just 8 months. The practical examples and real-world case studies were invaluable.'
    },
    {
      name: 'Michael Chen',
      role: 'CFO, Tech Startup',
      image: 'https://i.pravatar.cc/80?img=12',
      text: 'Outstanding content! The taxation strategies I learned here saved my company over $50K in the first year. Highly recommend for anyone serious about finance.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Financial Analyst',
      image: 'https://i.pravatar.cc/80?img=9',
      text: 'Best investment in my professional development. The instructors are industry experts, and the course material is always up-to-date with the latest regulations.'
    }
  ];

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
          clearProps: 'all'
        });
      }
    }, 100);

    // Start auto-scroll
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.resetAutoScroll();
  }

  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoScroll();
  }

  goToTestimonial(index: number): void {
    this.currentIndex = index;
    this.resetAutoScroll();
  }

  startAutoScroll(): void {
    this.autoScrollInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000); // Auto-scroll every 5 seconds
  }

  stopAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  resetAutoScroll(): void {
    this.stopAutoScroll();
    this.startAutoScroll();
  }
}
