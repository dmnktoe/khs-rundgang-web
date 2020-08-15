import { Component, OnInit } from '@angular/core';
import { StreamState } from '../../../core/interfaces/stream-state';
import { AudioService } from '../../../core/services/audio.service';
import { ApiService } from '../../../core/services/api.service';
import { finalize } from 'rxjs/operators';
import moment from 'moment';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
})
export class LiveComponent implements OnInit {
  currentShowName: any;
  currentShowImg: any;
  currentShowStart: any;
  currentShowEnd: any;

  nextShowName: any;
  nextShowStart: any;

  isLoading = false;

  state: StreamState;
  streamUrl = 'https://station.radio-rasclat.com/live';

  constructor(
    private audioService: AudioService,
    private apiService: ApiService
  ) {
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  ngOnInit() {
    this.isLoading = true;
    /* this.apiService
      .getLiveInfo()
      .pipe(finalize(() => {}))
      .subscribe((liveInfo) => {
        if (liveInfo.source_enabled === 'Master') {
          this.liveInfo = true;
        } else {
          if (liveInfo.source_enabled === 'Live') {
            this.liveInfo = true;
          } else {
            this.liveInfo = false;
          }
        }
      }); */
    this.apiService
      .getCurrentShow()
      .pipe(finalize(() => {}))
      .subscribe((currentShow) => {
        if (currentShow !== null) {
          this.currentShowName = currentShow.name;
          this.currentShowImg = currentShow.image_path;
          this.currentShowStart = new Date(currentShow.starts);
          this.currentShowEnd = new Date(currentShow.ends);
        }
        this.apiService
          .getNextShow()
          .pipe(finalize(() => {}))
          .subscribe((nextShow) => {
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

  openStream() {
    this.audioService.stop();
    this.playLiveStream();
  }

  play() {
    if (this.state.currentTrack.currentSrc === this.streamUrl) {
      this.audioService.play();
    } else {
      this.openStream();
    }
  }

  pause() {
    this.audioService.pause();
  }

  playLiveStream() {
    this.audioService
      .playLiveStream(
        this.streamUrl,
        this.currentShowName,
        this.currentShowImg,
        this.nextShowName,
        this.nextShowStart
      )
      .subscribe((events) => {
        // listening for fun here
      });
  }
}
