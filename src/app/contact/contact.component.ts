import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; // Import jQuery

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

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

  sendEmail(): void {
    const subject = '';
    const body = '';
    const emailAddress = 'esra.brown@ehotmail.com';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }


}

