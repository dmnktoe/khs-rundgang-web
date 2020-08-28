import { Component, OnInit, ɵEMPTY_MAP } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';
import _ from 'lodash';
import moment from 'moment';
import { Recording } from '@app/core/models/Recording';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss'],
})
export class RecordingsComponent implements OnInit {
  recordings: Recording[];
  recordingsSorted: any;
  isLoading = false;
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years = {
    min: 0,
    max: 0,
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiService
      .getRecordings()
      .pipe(finalize(() => {}))
      .subscribe((recordings: Recording[]) => {
        this.recordings = recordings;
        const newestRecording = _.maxBy(this.recordings, function (
          recording: Recording
        ) {
          return recording.timeStart;
        });

        const oldestRecording = _.minBy(this.recordings, function (
          recording: Recording
        ) {
          return recording.timeStart;
        });
        this.years.max = moment(newestRecording.timeStart, 'YYYY-MM-DD').year();
        this.years.min = moment(oldestRecording.timeStart, 'YYYY-MM-DD').year();
        // turn off loading state
        this.isLoading = false;
      });
  }

  getRecordingsByDate(year: number, month: number): Recording[] {
    let filtered: Recording[];
    filtered = _.filter(this.recordings, function (obj: Recording) {
      return (
        moment(obj.timeStart, 'YYYY-MM-DD').month() === month &&
        moment(obj.timeStart, 'YYYY-MM-DD').year() === year
      );
    });
    return filtered;
  }

  createRange(min: number, max: number) {
    const items: number[] = [];
    for (let i = min; i <= max; i++) {
      items.push(i);
    }
    return items;
  }
}
