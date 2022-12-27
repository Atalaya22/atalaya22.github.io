import { Directive, HostListener, ElementRef } from '@angular/core';
import { ScrollTrackerService } from '../services/scroll-tracker.service';

@Directive({
  selector: '[appScrollTracker]'
})
export class ScrollTrackerDirective {

  constructor(private element: ElementRef, private scrollTrackerService: ScrollTrackerService) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // Get the current scroll position of the window
    const currentScrollPosition = event.target.scrollingElement.scrollTop;

    // Pass the scroll percentage to the service
    this.scrollTrackerService.setScrollPosition(currentScrollPosition);
  }

}
