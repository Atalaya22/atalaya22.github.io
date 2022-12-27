import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetails, ProjectName, PROJECT_DETAILS } from '../gallery.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project!: ProjectDetails;
  currentId = 0;

  constructor(@Inject(MAT_DIALOG_DATA) private data: ProjectName) {}

  ngOnInit() {
    this.project = PROJECT_DETAILS[this.data];
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.previous();
    } else if (event.key === 'ArrowRight') {
      this.next();
    }
  }

  canGoPrevious(): boolean {
    return this.currentId !== 0;
  }

  canGoNext(): boolean {
    return this.currentId !== this.project.nImages - 1;
  }

  next() {
    if (this.canGoNext()) this.currentId += 1;
  }

  previous() {
    if (this.canGoPrevious()) this.currentId -= 1;
  }
}
