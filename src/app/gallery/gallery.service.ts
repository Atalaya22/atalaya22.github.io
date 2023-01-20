import { Injectable } from '@angular/core';
import { MAX_PROJECTS_DISPLAY, ProjectDetails, PROJECTS_TO_DISPLAY_INFO, ProjectTag, ShowMode } from './gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private allProjectList: ProjectDetails[] = PROJECTS_TO_DISPLAY_INFO;
  private selectedTags: Set<ProjectTag> = new Set<ProjectTag>();

  showMode = ShowMode.SOME;
  filteredProjects: ProjectDetails[] = this.allProjectList;
  shownProjects: ProjectDetails[] = this.filteredProjects.slice(0, MAX_PROJECTS_DISPLAY);

  addTag(tag: ProjectTag) {
    this.selectedTags.add(tag);
    this.showSome();
  }

  removeTag(tag: ProjectTag) {
    this.selectedTags.delete(tag);
    this.showSome();
  }

  showMore() {
    this.showMode = ShowMode.ALL;
    this.refreshCurrentList();
  }

  private showSome() {
    this.showMode = ShowMode.SOME;
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

    if (this.showMode === ShowMode.SOME) {
      this.shownProjects = this.filteredProjects.slice(0, MAX_PROJECTS_DISPLAY);
    } else {
      this.shownProjects = this.filteredProjects;
    }
  }
}
