import { Component } from '@angular/core';
import { ScrollTrackerService } from '../core/services/scroll-tracker.service';

@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss'],
})
export class FloatingMenuComponent {
  sections = ['home', 'gallery', 'contact'];

  constructor(public scrollTrackerService: ScrollTrackerService) {}

  scrollIntoSection(sectionIndex: number): void {
    this.scrollTrackerService.scrollToSection(sectionIndex);
  }
}
