import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';
import _ from 'lodash';
import moment from 'moment';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss'],
})
export class RecordingsComponent implements OnInit {
  recordings = '';
  recordingsSorted: any;
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiService
      .getRecordings()
      .pipe(finalize(() => {}))
      .subscribe((recordings) => {
        this.recordings = recordings;
        // helper function to get the month name from an item
        const monthName = (item: { timeStart: moment.MomentInput }) =>
          moment(item.timeStart, 'YYYY-MM-DD').format('YYYY-MM');
        // group items by month name and then get the name for each month
        const result = _.groupBy(recordings, monthName);
        this.recordingsSorted = result;
        // turn off loading state
        this.isLoading = false;
      });
  }
}
