import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = [
    'web development',
    'traveling',
    'java...',
    'good movie and popcorn',
    'javascript, angular...',
    'los aviones, la montaña, la playa',
    'her şey :)'
  ];
  counterS = 0;
  counterL = 0;
  deleteS = false;
  $text: any;

  constructor() { }


  ngOnInit(): void {
    this.cacheElem();
    this.type();
  }

  cacheElem() {
    this.$text = document.querySelector('.text');
  }

  type() {
    let message = this.message[this.counterS];
    const that = this;
    let speed = 0;

    message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
    if (this.message[this.counterS] !== message && !this.deleteS) {
      this.$text.textContent = message;
      speed = 90;
    } else {
      this.deleteS = true;
      speed = this.message[this.counterS] === message ? 1000 : 40;
      this.$text.textContent = message;
      if (message === '') {
        this.deleteS = false;
        this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
      }
    }
    setTimeout(function () {
      that.type();
    }, speed);
  
  }

  sendEmail(): void {
    const subject = 'Let\'s Work Together';
    const body = 'I came across your portfolio. I\'m totally interested in hiring you! So, how about we team up and create some magic together? 🔮 Let\'s make unicorns dance, pixels party, and clients rave about our brilliance! 🦄';
    const emailAddress = 'esrabrown@outlook.com';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }



}
