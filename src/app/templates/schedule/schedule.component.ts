import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  schedule: any;
  isLoading = false;
  view = 'thisWeek';
  todayDate: any;
  thisWeekDays: any;
  nextWeekDays: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getTodayDate();
    this.createThisWeekDates();
    this.createNextWeekDates();

    this.isLoading = true;
    this.apiService
      .getSchedule()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((schedule) => {
        this.schedule = schedule;
      });
  }

  getTodayDate() {
    this.todayDate = moment().startOf('day').toString();
  }

  createThisWeekDates() {
    const startOfThisWeek = moment().startOf('isoWeek');
    const endOfThisWeek = moment().endOf('isoWeek');

    const thisWeekDays = [];
    let day = startOfThisWeek;

    while (day <= endOfThisWeek) {
      thisWeekDays.push(day.toString());
      day = day.clone().add(1, 'd');
    }

    this.thisWeekDays = thisWeekDays;
  }

  createNextWeekDates() {
    const startOfNextWeek = moment().add(1, 'weeks').startOf('isoWeek');
    const endOfNextWeek = moment().add(1, 'weeks').endOf('isoWeek');

    const nextWeekDays = [];
    let day = startOfNextWeek;

    while (day <= endOfNextWeek) {
      nextWeekDays.push(day.toDate());
      day = day.clone().add(1, 'd');
    }

    this.nextWeekDays = nextWeekDays;
  }
}
