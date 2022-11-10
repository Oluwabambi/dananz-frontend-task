import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showNavBg: boolean = false;

  constructor() {}

  ngOnInit(): void {
    window.onscroll = () => {
      this.showNavBackground()
    };
  }

  showNavBackground() {
    let prevScrollpos = window.pageYOffset;
    this.showNavBg = prevScrollpos < 70 ? false : true;
  }
  
}
