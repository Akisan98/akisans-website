import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project, ProjectLink } from '../../project-link.model';

@Component({
  selector: 'app-featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {
  @Input() project!: Project;
  
  constructor() { }

  ngOnInit(): void {
  }
}
