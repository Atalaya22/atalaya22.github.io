import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetails, ProjectName, PROJECT_DETAILS } from '../gallery.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project?: ProjectDetails;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('projectId');
    if (projectId) {
      this.project = PROJECT_DETAILS[projectId as ProjectName];
    }
  }
}
