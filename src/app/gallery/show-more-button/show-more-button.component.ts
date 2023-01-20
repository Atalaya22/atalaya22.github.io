import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-show-more-button',
  templateUrl: './show-more-button.component.html',
  styleUrls: ['./show-more-button.component.scss'],
})
export class ShowMoreButtonComponent {
  constructor(public galleryService: GalleryService) {}
}
