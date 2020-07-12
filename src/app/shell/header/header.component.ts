import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { StreamState } from '../../interfaces/stream-state';
import moment from 'moment';
import * as $ from 'jquery';

import {
  AuthenticationService,
  CredentialsService,
  I18nService,
} from '@app/core';
import { ApiService } from '@app/core/api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  currentShow: any;
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

  defaultImage = './../../../assets/svg/placeholder.svg';
  streamUrl = 'https://station.radio-rasclat.com/live';

  constructor(
    private router: Router,
    private audioService: AudioService,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private i18nService: I18nService,
    private apiService: ApiService
  ) {
    // listen to stream state
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  ngOnInit() {
    {
      this.isLoading = true;
      $(document).ready(function () {
        let lastScrollTop = 0;
        $(window).scroll(function (event) {
          const st = $(this).scrollTop();
          if (st > lastScrollTop) {
            if (!$('.navbar').hasClass('hidden')) {
              $('.navbar').addClass('hidden');
            }
          } else {
            $('.navbar').removeClass('hidden');
          }

          lastScrollTop = st;

          if ($(this).scrollTop() <= 30) {
            $('.navbar').removeClass('hidden');
          }
        });
      });
    }
    this.apiService
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
      });
    this.apiService
        .getCurrentShow()
        .pipe(finalize(() => {}))
        .subscribe((currentShow) => {
          if (currentShow !== null) {
            this.currentShowName = currentShow.name;
            this.currentShowImg = currentShow.image_path;
            this.currentShowStart = new Date(currentShow.starts);
            this.currentShowEnd = new Date(currentShow.ends);
            {
              $(document).ready(function () {
                const countDownDate = new Date(currentShow.ends).getTime();
                const startDate = new Date(currentShow.starts).getTime();
                function setBar() {
                  const now = new Date().getTime();
                  const distanceWhole = countDownDate - startDate;
                  const distanceLeft = countDownDate - now;
                  const minutesLeft = Math.floor(distanceLeft / (1000 * 60));
                  const minutesTotal = Math.floor(distanceWhole / (1000 * 60));
                  const progress = Math.floor(
                      ((minutesTotal - minutesLeft) / minutesTotal) * 100
                  );
                  $('#progressbar')
                      .attr('aria-valuenow', progress)
                      .css('width', progress + '%');
                }
                setBar();
                setInterval(setBar, 60000);
              });
            }
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

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  closeMenu() {
    this.menuHidden = true;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService
      .logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
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
    this.audioService.playLiveStream(this.streamUrl, this.currentShowName, this.currentShowImg, this.nextShowName, this.nextShowStart)
        .subscribe((events) => {
          // listening for fun here
        });
  }
}
