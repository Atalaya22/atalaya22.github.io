import { Component } from '@angular/core';
import { ProjectDetails, ProjectName, PROJECTS_TO_DISPLAY_INFO } from './gallery.model';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  projectList: ProjectDetails[] = PROJECTS_TO_DISPLAY_INFO;

  constructor(public dialog: MatDialog) {}

  openProject(id: ProjectName) {
    this.dialog.open(ProjectDetailsComponent, { data: id });
  }
}
