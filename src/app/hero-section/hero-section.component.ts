import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'https://images.unsplash.com/photo-1578927107994-75410e4dcd51?auto=format&fit=crop&q=80&w=1929&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Broken Church',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      class: 'carousel-image'
    };
    this.slides[1] = {
      id: 1,
      src: 'https://images.unsplash.com/photo-1618481187866-5c7b6b9b5431?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Starry Daze',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      class: 'carousel-image'
    }
    this.slides[2] = {
      id: 2,
      src: 'https://images.unsplash.com/photo-1518713661966-8ce9a2e78bbd?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sea of Silhouettes',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      class: 'carousel-image'
    }
  }
}
