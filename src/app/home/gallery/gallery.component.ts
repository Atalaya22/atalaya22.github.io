import { Component } from '@angular/core';
import { Project, PROJECT_LIST_NAMES } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  projectList: Project[] = PROJECT_LIST_NAMES.map(pName => ({
    name: pName,
    coverImageSrc: this.buildCoverImageSrc(pName),
  }));

  private buildCoverImageSrc(projectName: string): string {
    return `assets/images/projects/${projectName}/${projectName}1.jpg`;
  }
}
