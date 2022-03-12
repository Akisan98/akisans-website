import { Component, Input, OnInit } from '@angular/core';
import { Project, ProjectLink } from 'src/app/project-link.model';

@Component({
  selector: 'app-other-project',
  templateUrl: './other-project.component.html',
  styleUrls: ['./other-project.component.scss']
})
export class OtherProjectComponent implements OnInit {
  @Input() project!: Project;
  
  constructor() { }

  ngOnInit(): void {
  }
}
