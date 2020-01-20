import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiService } from '@app/core/api.service';
import { finalize } from 'rxjs/operators';
import moment from 'moment';

@Component({
  selector: 'app-current-track',
  templateUrl: './current-track.component.html',
  styleUrls: ['./current-track.component.scss']
})
export class CurrentTrackComponent implements OnInit {
  currentShowName: any;
  currentShowStart: any;
  currentShowEnd: any;
  nextShowName: any;
  nextShowStart: any;
  nextShowEnd: any;
  isLoading = false;
  value: string;

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  constructor(private apiService: ApiService) {}

  onAudioPlay() {
    if (this.audioPlayerRef.nativeElement.paused) {
      this.audioPlayerRef.nativeElement.play();
      this.value = 'pause-circle';
    } else {
      this.audioPlayerRef.nativeElement.pause();
      this.value = 'play-circle';
    }
  }

  ngOnInit() {
    this.isLoading = true;
    moment.locale('de');
    this.value = 'play-circle';
    /* this.apiService.getCurrentTrackLive().subscribe((current: any) => {
      this.current = current;
      this.isLoading = false;
    });*/
    this.apiService
      .getCurrentShow()
      .pipe(finalize(() => {}))
      .subscribe(currentShow => {
        if (currentShow !== null) {
          this.currentShowName = currentShow.name;
          this.currentShowStart = new Date(currentShow.starts);
          this.currentShowEnd = new Date(currentShow.ends);
        }
        this.apiService
          .getNextShow()
          .pipe(finalize(() => {}))
          .subscribe(nextShow => {
            if (nextShow.length > 0) {
              const startDate = moment(
                nextShow[0].starts,
                'YYYY-MM-DD HH:mm:ss'
              ).toDate();
              this.nextShowName = nextShow[0].name;
              this.nextShowStart = moment(startDate).fromNow();
            }
            this.isLoading = false;
          });
      });
  }
}
