import { Component } from '@angular/core';
import { MAX_PROJECTS_DISPLAY, ShowMode } from './gallery.model';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {

  constructor(public galleryService: GalleryService) {}

  MAX_PROJECTS_DISPLAY = MAX_PROJECTS_DISPLAY;
  ShowMode = ShowMode;
}
