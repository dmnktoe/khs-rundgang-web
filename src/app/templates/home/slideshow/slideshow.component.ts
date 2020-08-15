import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  @Input() recordings = '';
  @Input() hotRecording = '';
  @Input() isLoading = false;

  defaultImage = './../../../assets/svg/placeholder.svg';

  public config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    observer: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
