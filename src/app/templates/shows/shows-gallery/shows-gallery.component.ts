import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows-gallery',
  templateUrl: './shows-gallery.component.html',
  styleUrls: ['./shows-gallery.component.scss'],
})
export class ShowsGalleryComponent implements OnInit {
  @Input() shows = '';
  @Input() limit: number;
  @Input() isLoading = false;

  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor() {}

  ngOnInit() {}
}
