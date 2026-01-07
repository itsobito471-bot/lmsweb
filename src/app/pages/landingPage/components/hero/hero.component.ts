import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  constructor() { }

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

    // Floating animations
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
  }
}
