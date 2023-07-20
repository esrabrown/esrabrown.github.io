import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; // Import jQuery

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = 'mailto:esra.brown@hotmail.com';
  linkedIn: string = 'https://www.linkedin.com/in/esrabrown';
  github: string = 'https://github.com/esrabrown';

  ngOnInit() {
    // Wait for the DOM to be ready
    $(document).ready(() => {
      // Attach the click event to the button
      $('button').click(() => {
        // Toggle the 'active' class on the elements
        $('button').toggleClass('active');
        $('.title').toggleClass('active');
        $('nav').toggleClass('active');
      });
    });
  }
}

