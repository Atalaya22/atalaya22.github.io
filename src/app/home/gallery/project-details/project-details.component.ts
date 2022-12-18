import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetails, ProjectName, PROJECT_DETAILS } from '../gallery.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project!: ProjectDetails;
  projectImagesIds!: number[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('projectId');
    this.project = PROJECT_DETAILS[projectId as ProjectName];
    this.projectImagesIds = Array(this.project.nImages - 1)
      .fill(0)
      .map((_, i) => i + 1);
  }
}
