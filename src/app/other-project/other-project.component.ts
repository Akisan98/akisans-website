import { Component, Input, OnInit } from '@angular/core';
import { ProjectLink } from '../project-link.model';

@Component({
  selector: 'app-other-project',
  templateUrl: './other-project.component.html',
  styleUrls: ['./other-project.component.scss']
})
export class OtherProjectComponent implements OnInit {
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
