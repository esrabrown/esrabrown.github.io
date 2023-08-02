import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  
  isMobile: boolean = false; 
  isTablet: boolean = false;
  isLaptop: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
    this.breakpointObserver.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape
    ]).subscribe(result => {
      this.isTablet = result.matches;
    });

    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Medium
    ]).subscribe(result => {
      this.isLaptop = result.matches;
    });
  }
}
