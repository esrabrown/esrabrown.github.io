import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
    { label: 'Resume', link: '/resume' },
    { label: 'Skills', link: '/skills' }
  ];
  resumeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/resume.pdf');
  }
}

interface MenuItem {
  label: string;
  link: string;
}
