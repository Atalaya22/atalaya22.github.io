import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ProjectDetails, ProjectName, PROJECT_DETAILS, YoutubeVideoInfo, SketchfabInfo } from '../gallery.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project!: ProjectDetails;
  currentId = 0;

  content: (YoutubeVideoInfo | SketchfabInfo | number)[] = [];

  isVideo = false;
  isSketchfab = false;
  isImage = false;

  contentSrc: SafeUrl = '';
  contentTitle = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data: ProjectName, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.project = PROJECT_DETAILS[this.data];

    // Build the content array
    if (this.project.sketchfabInfo) {
      this.content.push(this.project.sketchfabInfo);
    }
    if (this.project.videoInfo) {
      this.content.push(this.project.videoInfo);
    }
    this.content = this.content.concat(new Array<number>(this.project.nImages).fill(0).map((_v, i) => i));
    this.recheckTypes();
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
    return this.currentId !== this.content.length - 1;
  }

  next() {
    if (this.canGoNext()) {
      this.currentId += 1;
      this.recheckTypes();
    }
  }

  previous() {
    if (this.canGoPrevious()) {
      this.currentId -= 1;
      this.recheckTypes();
    }
  }

  private recheckTypes() {
    this.isSketchfab = this.is3DEmbedded();
    this.isVideo = this.isYoutubeVideo();
    this.isImage = !this.isSketchfab && !this.isVideo;

    this.contentSrc = this.getContentSrc();
    this.contentTitle = this.getContentTitle();
  }

  private is3DEmbedded() {
    return this.content[this.currentId] instanceof SketchfabInfo;
  }

  private isYoutubeVideo() {
    return this.content[this.currentId] instanceof YoutubeVideoInfo;
  }

  private getContentSrc(): SafeUrl {
    const rawSrc = (this.content[this.currentId] as YoutubeVideoInfo).src;
    return this.sanitizer.bypassSecurityTrustResourceUrl(rawSrc);
  }

  private getContentTitle() {
    return (this.content[this.currentId] as YoutubeVideoInfo).src;
  }
}
