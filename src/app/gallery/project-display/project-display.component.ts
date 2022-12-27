import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetails, ProjectName } from '../gallery.model';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.scss'],
})
export class ProjectDisplayComponent implements OnInit {
  @Input() project!: ProjectDetails;
  currentSlide = 0;

  slides!: number[];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.slides = new Array(this.project.nImages).fill(0).map((_v, i) => i);
    this.currentSlide = Math.floor(Math.random() * this.slides.length);

    setTimeout(() => this.changeCurrentSlide(), this.getRandomNumber(2000, 5000));
  }

  private changeCurrentSlide() {
    this.currentSlide = Math.floor(Math.random() * this.slides.length);
    // Recursive to make it the time to wait random each time
    setTimeout(() => this.changeCurrentSlide(), this.getRandomNumber(2000, 5000));
  }

  private getRandomNumber(a: number, b: number): number {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  openProject(id: ProjectName) {
    this.dialog.open(ProjectDetailsComponent, { data: id });
  }
}
