import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  landscape: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    this.landscape = window.innerWidth > window.innerHeight;
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.landscape = window.innerWidth > window.innerHeight;
  }
}
