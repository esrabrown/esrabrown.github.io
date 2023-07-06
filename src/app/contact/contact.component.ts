import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = 'esra.brown@hotmail.com';
  linkedIn: string = 'https://www.linkedin.com/in/esrabrown';
  github: string = 'https://github.com/esrabrown';
}

