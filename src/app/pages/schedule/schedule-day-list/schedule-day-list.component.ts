import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-day-list',
  templateUrl: './schedule-day-list.component.html',
  styleUrls: ['./schedule-day-list.component.scss'],
})
export class ScheduleDayListComponent implements OnInit {
  @Input() schedule = '';
  @Input() isLoading = false;

  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor() {}

  ngOnInit(): void {}
}
