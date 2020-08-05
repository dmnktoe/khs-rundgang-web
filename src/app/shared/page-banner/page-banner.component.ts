import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss'],
})
export class PageBannerComponent implements OnInit {
  @Input() image: string;
  defaultImage = './../../../assets/svg/placeholder.svg';
  imagePath: string;

  constructor() {}

  ngOnInit(): void {
    this.imagePath = './../../../assets/images/' + this.image;
  }
}
