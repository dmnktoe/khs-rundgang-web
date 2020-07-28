import { Component, OnInit } from '@angular/core';
import { StreamState } from '@app/interfaces/stream-state';
import { Router } from '@angular/router';
import { AudioService } from '@app/services/audio.service';
import {
  AuthenticationService,
  CredentialsService,
  I18nService,
} from '@app/core';
import { ApiService } from '@app/core/api.service';
import { finalize } from 'rxjs/operators';
import * as $ from 'jquery';
import moment from 'moment';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
})
export class LiveComponent implements OnInit {
  liveInfo = false;
  currentShowName: any;
  currentShowImg: any;
  currentShowStart: any;
  currentShowEnd: any;
  nextShowName: any;
  nextShowStart: any;
  nextShowEnd: any;
  isLoading = false;
  state: StreamState;

  streamUrl = 'http://stream3.sthoerfunk.de:7000/sthoerfunk.mp3';

  constructor(
    private audioService: AudioService,
    private i18nService: I18nService,
    private apiService: ApiService
  ) {
    // listen to stream state
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
