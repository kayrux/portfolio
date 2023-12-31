import { Component, Input } from '@angular/core';
import projectsJSON from '../../../assets/schema/projects.json';
import { Project, ProjectJSON } from './project.model';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects = (projectsJSON as ProjectJSON).projects;
  public project!: Project;
  constructor(
    public projectsService: ProjectsService,
    private router: Router
  ) {}
  ngOnInit() {
    const id: number = Number(
      this.router.url.substring(this.router.url.indexOf('projects/') + 9)
    );
    this.project = this.projects[id];
  }
}
