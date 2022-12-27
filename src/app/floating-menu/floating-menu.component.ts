import { Component } from '@angular/core';
import { ScrollTrackerService } from '../core/services/scroll-tracker.service';

@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss'],
})
export class FloatingMenuComponent {
  constructor(private scrollTrackerService: ScrollTrackerService) {}

  checkCurrentSection(sectionIndex: number): boolean {
    return this.scrollTrackerService.checkInsideSection(sectionIndex);
  }
}
