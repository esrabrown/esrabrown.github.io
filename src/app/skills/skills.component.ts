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
    'HTML',
    'CSS',
    'MySQL',
    'Responsive Web Design',
    'Version Control (Git)'
  ];
}
