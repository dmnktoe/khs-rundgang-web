import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recordings-gallery',
  templateUrl: './recordings-gallery.component.html',
  styleUrls: ['./recordings-gallery.component.scss'],
})
export class RecordingsGalleryComponent implements OnInit {
  @Input() recordings = '';
  @Input() limit: number;
  @Input() isLoading = false;

  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor() {}

  ngOnInit() {}
}
