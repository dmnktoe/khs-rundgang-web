import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-recordings-slideshow',
  templateUrl: './recordings-slideshow.component.html',
  styleUrls: ['./recordings-slideshow.component.scss'],
})
export class RecordingsSlideshowComponent implements OnInit {
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
