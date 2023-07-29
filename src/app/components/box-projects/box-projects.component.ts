import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Project, ProjectDTO } from './models/Project';

@Component({
  selector: 'BoxProjects',
  templateUrl: './box-projects.component.html',
  styleUrls: ['./box-projects.component.css']
})
export class BoxProjectsComponent implements OnInit, OnDestroy {
  constructor() {}

  project: Project = {} as Project;
  @Input() projectInput: Project = {} as Project;
  ngUnsubscribe = new Subject<void>();

  public ngOnInit(): void {
    this.project = ProjectDTO.mapperDto(this.projectInput);
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
