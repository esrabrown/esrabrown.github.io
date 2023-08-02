import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('slide1') slide1!: ElementRef<HTMLInputElement>;
  @ViewChild('slide2') slide2!: ElementRef<HTMLInputElement>;
  @ViewChild('slide3') slide3!: ElementRef<HTMLInputElement>;

  currentSlideIndex: number = 0;
  slideCount: number = 3; // Total number of slides

  constructor() { }

  ngOnInit(): void {
    // Start the timer to change slides every 10 seconds (10000 milliseconds).
    setInterval(() => this.changeSlide(), 10000);
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  changeSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slideCount;
    switch (this.currentSlideIndex) {
      case 0:
        this.slide1.nativeElement.checked = true;
        break;
      case 1:
        this.slide2.nativeElement.checked = true;
        break;
      case 2:
        this.slide3.nativeElement.checked = true;
        break;
      default:
        break;
    }
  }
}
