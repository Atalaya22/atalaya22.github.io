import { AfterViewInit, Component, ElementRef,  QueryList, ViewChildren } from '@angular/core';
import { ScrollTrackerService } from '../core/services/scroll-tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('sections') sections!: QueryList<ElementRef>;

  constructor(private scrollTrackerService: ScrollTrackerService) {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.scrollTrackerService.setSections(this.sections);
  }
}
