import { Project } from "./project-link.model";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from './project-details';

import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getFeaturedProjects(): Observable<Project[]> {
    return of(FEATURED_PROJECTS);
  }

  getOtherProjects(): Observable<Project[]> {
    return of(OTHER_PROJECTS);
  }
}
