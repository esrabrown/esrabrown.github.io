import { Component } from '@angular/core';

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      image: 'assets/first.png',
      title: 'Qlean Quotes',
      description: '  This full-stack web app for housekeeping is built using Java and Spring Boot, and includes a secure user login with Spring Security, user profiles and quote history, a cost calculation form, and Square integration for payment and invoicing.',
      link: 'https://www.qleanquotes.com/authentication/login'
    },
    {
      image: 'assets/second.png',
      title: 'Tech Jobs',
      description: '  Created a Java-based web app using Spring Boot and Thymeleaf, allowing users to browse, search, add, and edit tech job listings with implemented ORM functionality using Spring Data.',
      link: 'https://example.com/project2'
    },
    {
      image: 'assets/thirdpic.png',
      title: 'Personal Website',
      description: '  The website you are currently viewing has been developed using Angular and TypeScript.',
      link: 'https://example.com/project3'
    },
  
  ];

  currentProjectIndex = 0;
  private timer: any;

  ngOnInit() {
    this.startSlideTimer();
  }

  startSlideTimer() {
    this.timer = setInterval(() => {
      this.nextProject();
    }, 8000);
  }

  prevProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
  }

  nextProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  goToSlide(index: number): void {
    this.currentProjectIndex = index;
  }
}

