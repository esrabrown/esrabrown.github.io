import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const bg = document.querySelector('.item-bg') as HTMLElement;
    const items = document.querySelectorAll('.news__item');
    const item = document.querySelector('.news__item') as HTMLElement;

    function cLog(content: any) {
      console.log(content);
    }

    const itemBg = document.querySelector('.item-bg') as HTMLElement;
    const newsItems = document.querySelectorAll('.news__item');

    if (window.innerWidth > 800) {
      document.addEventListener('mouseover', function(event) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('news__item')) {
          const newsItems = document.querySelectorAll('.news__item');
          newsItems.forEach(function(element) {
            element.addEventListener('mouseover', function() {
              const rect = target.getBoundingClientRect();
              const x = rect.left;
              const y = rect.top;
              const width = rect.width;
              const height = rect.height;
      
              const itemBg = document.querySelector('.item-bg') as HTMLElement;
              const newsItems = document.querySelectorAll('.news__item');
              newsItems.forEach(function(item) {
                item.classList.remove('active');
              });
              itemBg.classList.add('active');
      
              bg.style.width = width + 'px';
              bg.style.height = height + 'px';
              bg.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
      
            element.addEventListener('mouseleave', function() {
              const itemBg = document.querySelector('.item-bg') as HTMLElement;
              const newsItems = document.querySelectorAll('.news__item');
              newsItems.forEach(function(item) {
                item.classList.remove('active');
              });
              itemBg.classList.remove('active');
            });
          });
        }
      });
    }      

    const swiper = new Swiper('.news-slider', {
      effect: 'coverflow',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 'auto',
      speed: 300,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
      },
      breakpoints: {
        480: {
          spaceBetween: 0,
          centeredSlides: true
        }
      },
      simulateTouch: true,
      navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
      },
      pagination: {
        el: '.news-slider__pagination',
        clickable: true
      },
      on: {
        init: function () {
          const activeItem = document.querySelector('.swiper-slide-active') as HTMLElement;
          const sliderItem = activeItem.querySelector('.news__item') as HTMLElement;

          const activeNewsItem = document.querySelector('.swiper-slide-active .news__item') as HTMLElement;
          activeNewsItem.classList.add('active');

          const rect = sliderItem.getBoundingClientRect();
          const x = rect.left;
          const y = rect.top;
          const width = rect.width;
          const height = rect.height;

          const itemBg = document.querySelector('.item-bg') as HTMLElement;
          itemBg.classList.add('active');

          bg.style.width = width + 'px';
          bg.style.height = height + 'px';
          bg.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
      }
    });

    swiper.on('touchEnd', function () {
      const newsItems = document.querySelectorAll('.news__item');
      newsItems.forEach(function (item) {
        item.classList.remove('active');
      });
      const activeNewsItem = document.querySelector('.swiper-slide-active .news__item') as HTMLElement;
      activeNewsItem.classList.add('active');
    });

    swiper.on('slideChange', function () {
      const newsItems = document.querySelectorAll('.news__item');
      newsItems.forEach(function (item) {
        item.classList.remove('active');
      });
    });

    swiper.on('slideChangeTransitionEnd', function () {
      const activeItem = document.querySelector('.swiper-slide-active') as HTMLElement;
      const sliderItem = activeItem.querySelector('.news__item') as HTMLElement;

      const activeNewsItem = document.querySelector('.swiper-slide-active .news__item') as HTMLElement;
      activeNewsItem.classList.add('active');

      const rect = sliderItem.getBoundingClientRect();
      const x = rect.left;
      const y = rect.top;
      const width = rect.width;
      const height = rect.height;

      const itemBg = document.querySelector('.item-bg') as HTMLElement;
      itemBg.classList.add('active');

      bg.style.width = width + 'px';
      bg.style.height = height + 'px';
      bg.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

}
