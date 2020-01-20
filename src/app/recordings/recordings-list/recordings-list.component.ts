import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recordings-list',
  templateUrl: './recordings-list.component.html',
  styleUrls: ['./recordings-list.component.scss']
})
export class RecordingsListComponent implements OnInit {
  @Input() recordings = '';
  @Input() isLoading = false;

  defaultImage =
    'https://placeholder.pics/svg/600x600/DEDEDE/555555/Radio%20Rasclat';

  constructor() {}

  ngOnInit() {}
}
