import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss'],
})
export class PageBannerComponent {
  @Input() image: string;
  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor() {}
}
