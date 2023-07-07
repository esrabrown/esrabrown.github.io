import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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

  education: any[] = [
  {
    institution: 'Uludag University, Turkiye',
    degree: 'Bachelor of Philosophy',
    duration: '2010 - 2015'
  },
  {
    institution: 'LaunchCode',
    degree: 'Certificate in Web Development',
    duration: '2022-2023',
    coursework: 'Full-Stack Web Development'
  }
];

additionalCourses: string[] = [
   'Computational Thinking for Problem Solving, University of Pennsylvania, Coursera — 2023',
   'Java for Programmers Course, Codecademy — 2023'
]
}