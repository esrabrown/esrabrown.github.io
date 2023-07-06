import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
    experiences: any[] = [
      {
        company: 'Atades, Zaragoza/Spain',
        title: 'Mentor',
        duration: 'October 2017 - August 2018',
        responsibilities: [
          'Collaborated on a large team of dedicated individuals at Leisure and Entertainment Club Los Tigres, which aimed to enhance the quality of life for people with intellectual disabilities. The team consisted of over 30 members, and as part of my role, I regularly mentored and provided support to a diverse group disabled students, offering guidance and assistance to help them participate in various activities such as sports, theater, dance, trips and camping.'
        ]
      },
      {
        company: 'Gokkusagi Special Education and Rehabilitation Center, Turkiye',
        title: 'Assistant Manager',
        duration: 'September 2016 - September 2017',
        responsibilities: [
        'Prepared detailed monthly performance reports by collecting and analyzing data.',
        'Produced monthly performance reports for school management, driving strategic decision making for enhanced organizational performance.',
        'Collaborated closely with parents of handicapped children, establishing effective communication channels to understand their concerns and goals for their child’s education and development, providing necessary support and guidance.'
      ]
      },
      {

        company: 'Yakin Ilgi Special Education and Rehabilitation Center, Turkiye',
        title: 'Manager',
        duration: 'August 2015 - December 2015',
        responsibilities: [
        'Planned and coordinated school schedules for optimal resource utilization, including timetables, staff allocation, and student assignments.',
        'Managed school discipline to ensure student safety.',
        'Organized administrative tasks, managed resources, and optimized workflow to enhance productivity and overall effectiveness.'
      ]
      }
    ];
}
