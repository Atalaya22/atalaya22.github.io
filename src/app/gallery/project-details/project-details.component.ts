import { Component, Inject, OnInit } from '@angular/core';
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

  constructor(@Inject(MAT_DIALOG_DATA) private data: ProjectName) {}

  ngOnInit() {
    this.project = PROJECT_DETAILS[this.data];
  }
}
