import { Injectable } from '@angular/core';
import { ProjectDetails, PROJECTS_TO_DISPLAY_INFO, ProjectTag } from './gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private allProjectList: ProjectDetails[] = PROJECTS_TO_DISPLAY_INFO;
  private selectedTags: Set<ProjectTag> = new Set<ProjectTag>();

  filteredProjects: ProjectDetails[] = this.allProjectList;

  addTag(tag: ProjectTag) {
    this.selectedTags.add(tag);
    this.refreshCurrentList();
  }

  removeTag(tag: ProjectTag) {
    this.selectedTags.delete(tag);
    this.refreshCurrentList();
  }

  private refreshCurrentList() {
    if (this.selectedTags.size === 0) {
      this.filteredProjects = this.allProjectList;
    } else {
      this.filteredProjects = this.allProjectList.filter(project =>
        project.tags?.some(tag => this.selectedTags.has(tag))
      );
    }
  }
}
