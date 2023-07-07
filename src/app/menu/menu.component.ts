import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { label: 'Home', link: '/home' },
    { label: 'About', link: '/about' },
    { label: 'Skills', link: '/skills' },
    { label: 'Projects', link:'/projects'},
    { label: 'Contact', link: '/contact' }
  ];
}

interface MenuItem {
  label: string;
  link: string;
}
