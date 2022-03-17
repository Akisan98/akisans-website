import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import * as AOS from 'aos';
import { ProjectService } from './project.service';
import { Project } from './project-link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit  {
  featuredProjects: Project[] = [];
  otherProjects: Project[] = [];

  constructor(private projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.getProjects();
    AOS.init({
      once: true,
      duration: 2500,
    });
  }
  
  ngAfterViewInit() {
    this.elementsPrRow = window.innerWidth >= 1500 ? 4 : 2
    feather.replace();
  }

  getProjects() {
    this.projectService.getFeaturedProjects()
        .subscribe(featured => this.featuredProjects = featured)
    
    this.projectService.getOtherProjects()
        .subscribe(other => this.otherProjects = other)
  }

  // Other Projects Elements per Row.
  elementsPrRow: number = 1;
  
  @HostListener('window:resize', ['$event'])
  onResize() { //event
    // 2 -> 6, 4 -> 3
    this.elementsPrRow = window.innerWidth >= 1500 ? 4 : 2
  }
}
