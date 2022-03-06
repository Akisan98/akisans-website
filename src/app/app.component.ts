import { AfterViewInit, Component, HostListener } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
  title = 'akisans-website';

  ngAfterViewInit() {
    this.elemsPrRow = window.innerWidth >= 1500 ? 4 : 2
    feather.replace();
  }

  // Other Projects Elements per Row.
  elemsPrRow: number = 1;
  
  @HostListener('window:resize', ['$event'])
  onResize() { //event
    // 2 -> 6, 4 -> 3
    this.elemsPrRow = window.innerWidth >= 1500 ? 4 : 2
  }
}
