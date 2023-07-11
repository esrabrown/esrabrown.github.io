import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.addEventListener("mousemove", (evt: MouseEvent) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;
  
      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
      });
  
      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
      });
    });
  }

  sendEmail(): void {
    const subject = 'Hiring request';
    const body = 'I\'m interested in hiring you. Please contact me.';
    const emailAddress = 'esra.brown@ehotmail.com';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }



}
