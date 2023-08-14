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
      description: '  Engineered a robust web application facilitating effortless browsing, searching, addition, and editing of tech job listings. Developed using Java, Spring Boot, and Thymeleaf and MySQL, while meticulously adhering to the Model-View-Controller (MVC) architecture',
      link: 'https://example.com/project2'
    },
    {
      image: 'assets/thirdpic.png',
      title: 'Personal Website',
      description: "You are currently exploring the website I've created, a dynamic personal platform skillfully crafted with Angular, TypeScript, HTML, and CSS. This digital space encapsulates my journey and demonstrates my prowess in the field of Software Engineering.",
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

