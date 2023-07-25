

// import { Component, OnInit } from '@angular/core';
// declare const $: any; // Declare jQuery to use it in TypeScript

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements OnInit {
 
//   constructor() { }

//   ngOnInit(): void {
//     this.initializeMenu();
//   }

//   initializeMenu(): void {
//     const elementWidth = $('ul').width();
//     const containerWidth = $('nav').width();
//     const difference = elementWidth - containerWidth;
//     const finalWidth = difference * 1.5;
//     const element = $('ul');
    
  
//     // active on click
//     $('li').on('click', () => {
//       $('li').removeClass('active');
//       $(this).addClass('active');
      
//   });

//   }
// }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements OnInit {
//   isMenuOpen: boolean = false;

//   constructor() { }

//   ngOnInit(): void {
//     this.initializeMenu();
//   }

//   initializeMenu(): void {

//   }

//   toggleMenu(): void {
//     this.isMenuOpen = !this.isMenuOpen;
//   }
 
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html', // Make sure to have the corresponding HTML template file
  styleUrls: ['./menu.component.css'] // Make sure to have the corresponding CSS file
})
export class MenuComponent {

  // Variable to track the state of the menu
  isMenuOpen = false;

  // Function to handle the menu toggle click event
  onMenuToggleClick() {
    // Toggle the state of the menu
    this.isMenuOpen = !this.isMenuOpen;
  }
}
