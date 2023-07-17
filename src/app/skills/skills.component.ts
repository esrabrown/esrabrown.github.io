import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: string[] = [
    'Java',
    'SpringBoot',
    'Angular',
    'JavaScript',
    'TypeScript',
    'React',
    'HTML-5',
    'CSS-3',
    'Bootstrap',
    'Thymeleaf',
    'MySQL',
    'Python',
    'IntelliJ',
    'Visaul Studio Code',
    'Version Control (GitHub)',
    'Responsive Web Design'
    
  ];
}
