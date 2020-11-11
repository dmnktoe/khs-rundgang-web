import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
})
export class CookiesComponent implements OnInit {
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: { body: any }
  ) {}

  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src =
      'https://consent.cookiebot.com/e9dc8e8a-a27e-4198-82ed-f69f7b80cd66/cd.js';
    s.text = ``;
    this.renderer2.appendChild(this.document.body, s);
  }
}
