// import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements AfterViewInit {
//   @ViewChildren('item') items!: QueryList<ElementRef<HTMLDivElement>>;
//   @ViewChildren('indicator') indicator!: ElementRef<HTMLDivElement>;

//   constructor() { }

//   ngAfterViewInit() {
//     const indicator = this.indicator.nativeElement;
//     const items = this.items.toArray();

//     function handleIndicator(el: HTMLElement) {
//       items.forEach(item => {
//         item.nativeElement.classList.remove('is-active');
//         item.nativeElement.removeAttribute('style');
//       });

//       indicator.style.width = `${el.offsetWidth}px`;
//       indicator.style.left = `${el.offsetLeft}px`;
//       indicator.style.backgroundColor = el.getAttribute('active-color')!;

//       el.classList.add('is-active');
//       el.style.color = el.getAttribute('active-color')!;
//     }

//     items.forEach(item => {
//       item.nativeElement.addEventListener('click', (e) => { handleIndicator(e.target as HTMLElement) });
//       if (item.nativeElement.classList.contains('is-active')) {
//         handleIndicator(item.nativeElement);
//       }
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
declare const $: any; // Declare jQuery to use it in TypeScript

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initializeMenu();
  }

  initializeMenu(): void {
    const elementWidth = $('ul').width();
    const containerWidth = $('nav').width();
    const difference = elementWidth - containerWidth;
    const finalWidth = difference * 1.5;
    const element = $('ul');

    // active on click
    $('li').on('click', () => {
      $('li').removeClass('active');
      $(this).addClass('active');
    });
  }
}
