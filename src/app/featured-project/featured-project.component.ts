import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectLink } from '../project-link.model';

@Component({
  selector: 'app-featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {
  @Input() title: String = 'No Title Provided';
  @Input() platform: String = 'No Platform Provided';
  @Input() tools: String = 'No Tools Provided';
  @Input() buttons: ProjectLink = {
    github: "Yes",
    googlePlay: "Yes",
    external: "Yes",
    project: "Yes",
  };

  
  constructor() { }

  ngOnInit(): void {
  }

}
