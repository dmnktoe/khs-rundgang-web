import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
})
export class TopBannerComponent implements OnInit {
  cookieValue: any;

  constructor(private cookieService: CookieService) {
    this.cookieService.set('Test', 'Hello World');
    this.cookieValue = this.cookieService.get('Test');
  }

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('Test');
    console.log(this.cookieValue);
  }
}
