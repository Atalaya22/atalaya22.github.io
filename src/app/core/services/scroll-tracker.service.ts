import { ElementRef, Injectable, QueryList } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollTrackerService {
  scrollPosition!: number;
  sectionsTop: number[] = [];
  sections: ElementRef[] = [];
  currentSection = 0;

  constructor() {}

  setSections(sections: QueryList<ElementRef<any>>) {
    let height = 0;
    sections.forEach(v => {
      this.sectionsTop.push(height);
      this.sections.push(v);
      height += v.nativeElement.scrollHeight;
    });
  }

  checkInsideSection(sectionIndex: number): boolean {
    return this.currentSection === sectionIndex;
  }

  setScrollPosition(scrollPercentage: number) {
    this.scrollPosition = scrollPercentage;
    for (let i = 0; i < this.sectionsTop.length; i++) {
      if (this.scrollPosition >= this.sectionsTop[i] && this.scrollPosition < this.sectionsTop[i + 1]) {
        this.currentSection = i;
        return;
      }
    }
    this.currentSection = this.sectionsTop.length - 1;
  }

  scrollToSection(sectionIndex: number): void {
    this.sections[sectionIndex].nativeElement.scrollIntoView({ behaviour: 'smooth', block: "start", inline: "nearest" });
  }
}
