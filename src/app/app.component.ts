import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
  title = 'akisans-website';

  ngAfterViewInit() {
    feather.replace();
  }
}
