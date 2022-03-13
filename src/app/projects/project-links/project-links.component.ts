import { Component, Input, OnInit } from '@angular/core';
import { ProjectLink } from 'src/app/project-link.model';

@Component({
  selector: 'app-project-links',
  templateUrl: './project-links.component.html',
  styleUrls: ['./project-links.component.scss']
})
export class ProjectLinksComponent implements OnInit {
  @Input() buttons!: ProjectLink;

  constructor() { }

  ngOnInit(): void {
  }

}
