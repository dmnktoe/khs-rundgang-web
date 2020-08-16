import { Component, Input, OnInit } from '@angular/core';
import { Recording } from '@app/core/models/Recording';

@Component({
  selector: 'app-recordings-gallery',
  templateUrl: './recordings-gallery.component.html',
  styleUrls: ['./recordings-gallery.component.scss'],
})
export class RecordingsGalleryComponent implements OnInit {
  @Input() recordings: Recording[];
  @Input() limit: number;
  @Input() isLoading = false;

  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor() {}

  ngOnInit() {}
}
