import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('load', () => {
      const carousel: any = document.querySelector('.carousel');
      const images = carousel.querySelectorAll('.carousel-image');

      let counter = 0;
      const width = images[0].offsetWidth;
      console.log(width);
      

      function slide() {
        const nextIndex = counter % (images.length - 1);
        carousel.style.transform = `translateX(-${width * nextIndex}px)`;
      }

      setInterval(() => {
        counter++;
        slide();
      }, 3000);
    });
  }
}
