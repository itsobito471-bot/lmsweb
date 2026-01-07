import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.from('.footer-content', {
      scrollTrigger: {
        trigger: 'app-footer',
        start: 'top 95%',
        toggleActions: 'play none none none' // Play once
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });
  }
}
