import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { INFORMATIONS } from 'src/assets/helpers/Informations';

@Component({
  selector: 'Projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnDestroy {
  constructor() {}

  title = INFORMATIONS.Projects.Title;
  projects = INFORMATIONS.Projects.ListProjects;
  ngUnsubscribe = new Subject<void>();

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
