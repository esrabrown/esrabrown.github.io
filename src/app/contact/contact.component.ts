
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isButtonActive = false;

  toggleClasses(): void {
    this.isButtonActive = !this.isButtonActive;
  }

  sendEmail(): void {
    const subject = '';
    const body = '';
    const emailAddress = 'esrabrown@outlook.com';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
}

