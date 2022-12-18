import { Component } from '@angular/core';
import { ProjectDetails, PROJECTS_TO_DISPLAY_INFO } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  projectList: ProjectDetails[] = PROJECTS_TO_DISPLAY_INFO;
}
