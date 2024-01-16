import { ElementRef, Injectable, QueryList } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollTrackerService {
  scrollTopPosition!: number;
  sectionsTop: number[] = [];
  sections: ElementRef[] = [];
  public currentSection = 0;

  constructor() {}

  setSections(sectionsList: QueryList<ElementRef<any>>) {
    sectionsList.forEach(v => {
      this.sections.push(v);
    });
    this.recalculateSectionsTop();
  }

  private recalculateSectionsTop() {
    let height = 0;
    this.sectionsTop = [];
    this.sections.forEach(v => {
      this.sectionsTop.push(height);
      height += v.nativeElement.scrollHeight;
    });
  }

  setScrollPosition(scrollTop: number) {
    this.recalculateSectionsTop();
    this.scrollTopPosition = scrollTop;
    for (let i = 0; i < this.sectionsTop.length; i++) {
      if (this.scrollTopPosition >= this.sectionsTop[i] && this.scrollTopPosition < this.sectionsTop[i + 1]) {
        this.currentSection = i;
        return;
      }
    }
    this.currentSection = this.sectionsTop.length - 1;
  }

  scrollToSection(sectionIndex: number): void {
    this.sections[sectionIndex].nativeElement.scrollIntoView({
      behaviour: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
