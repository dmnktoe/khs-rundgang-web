import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {
  @Input() shows = '';
  @Input() isLoading = false;

  defaultImage =
    'https://placeholder.pics/svg/600x600/FFFFFF-FFFFFF/000000-FFFFFF/Radio%20Rasclat';

  constructor() {}

  ngOnInit() {}
}
