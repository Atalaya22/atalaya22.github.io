import { Component } from '@angular/core';
import { MatChipSelectionChange } from '@angular/material/chips';
import { ProjectTag } from '../gallery.model';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
})
export class ChipListComponent {
  TAGS = Object.values(ProjectTag);

  constructor(private galleryService: GalleryService) {}

  onSelectionChange(chipChange: MatChipSelectionChange) {
    if (chipChange.selected) {
      this.galleryService.addTag(chipChange.source.id as ProjectTag);
    } else {
      this.galleryService.removeTag(chipChange.source.id as ProjectTag);
    }
  }
}
