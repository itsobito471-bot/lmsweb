import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-instructor-banner',
  templateUrl: './instructor-banner.component.html',
  styleUrls: ['./instructor-banner.component.css']
})
export class InstructorBannerComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'app-instructor-banner',
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    tl.from('.instructor-text', { x: -100, scale: 0.8, opacity: 0, duration: 1, ease: 'power3.out' })
      .from('.instructor-image', { x: 100, scale: 0.8, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.8');
  }
}
