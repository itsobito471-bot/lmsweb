import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.badge', { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
      .from('h1', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.hero-actions', { y: 20, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.hero-trust', { opacity: 0, duration: 1 }, '-=0.4');

    gsap.from('.main-image-wrapper', {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.5
    });

    // Floating animations (Keep existing but enhance with scroll)
    gsap.to('.card-1', {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to('.card-2', {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.3
    });

    // Parallax Scroll Effects
    // Move the main image slightly slower than scroll to create depth
    gsap.to('.main-image-wrapper', {
      scrollTrigger: {
        trigger: 'section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 50, // Reduced vertical movement
      x: 100, // Move to the right
      ease: 'none'
    });

    // Move cards at different speeds for 3D feel
    gsap.to('.card-1', {
      scrollTrigger: {
        trigger: 'section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      },
      y: -50, // Move up/counter-act scroll more
      ease: 'none'
    });

    gsap.to('.card-2', {
      scrollTrigger: {
        trigger: 'section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 80, // Move down faster
      ease: 'none'
    });

    // Parallax for text content
    gsap.to('.flex-col > *', {
      scrollTrigger: {
        trigger: 'section',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5
      },
      y: -30,
      stagger: 0.05,
      ease: 'none'
    });
  }
}
