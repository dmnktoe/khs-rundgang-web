import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ApiService } from '@app/core/services/api.service';
import { finalize } from 'rxjs/operators';
import moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  blogPosts = '';
  projects = '';

  currentShow: any;
  nextShow: any;

  recordings = '';
  shows = '';
  hotRecordings: any = [];
  hotRecording: any = [];
  schedule: any;
  isLoading = false;
  today: any;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is <= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      990: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiService
      .getRecordings()
      .pipe(finalize(() => {}))
      .subscribe((recordings) => {
        recordings.timeStart = new Date(
          recordings.timeStart
        ).toLocaleDateString();
        this.recordings = recordings;
        this.apiService
          .getHotRecording()
          .pipe(finalize(() => {}))
          .subscribe((hotRecording) => {
            this.hotRecording = hotRecording[0];
            this.apiService
              .getShowsRecentlyUpdated()
              .pipe(finalize(() => {}))
              .subscribe((showsRecentlyUpdated) => {
                this.shows = showsRecentlyUpdated;
                this.apiService
                  .getSchedule()
                  .pipe(finalize(() => {}))
                  .subscribe((schedule) => {
                    this.today = moment().format('dddd');
                    this.schedule =
                      schedule[moment().format('dddd').toLowerCase()];
                    this.apiService
                      .getHotRecordings()
                      .pipe(finalize(() => {}))
                      .subscribe((hotRecordings) => {
                        this.hotRecordings = hotRecordings;
                        this.apiService
                          .getBlogPosts()
                          .pipe(finalize(() => {}))
                          .subscribe((blogPosts) => {
                            this.blogPosts = blogPosts;
                            this.apiService
                              .getProjects()
                              .pipe(finalize(() => {}))
                              .subscribe((projects) => {
                                this.projects = projects;
                                this.apiService
                                  .getCurrentShow()
                                  .pipe(finalize(() => {}))
                                  .subscribe((currentShow) => {
                                    if (currentShow !== null) {
                                      this.currentShow = {
                                        title: currentShow.name,
                                        image: currentShow.image_path,
                                        timeStart: moment(
                                          currentShow.starts,
                                          'YYYY-MM-DD HH:mm:ss'
                                        ).toDate(),
                                        timeEnd: moment(
                                          currentShow.ends,
                                          'YYYY-MM-DD HH:mm:ss'
                                        ).toDate(),
                                      };
                                    } else {
                                      this.currentShow = false;
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
                                          if (
                                            moment().isBetween(
                                              moment(startDate).subtract(
                                                30,
                                                'minutes'
                                              ),
                                              startDate
                                            )
                                          ) {
                                            this.nextShow = {
                                              title: nextShow[0].name,
                                              image: nextShow[0].image_path,
                                              timeStart: moment(
                                                startDate
                                              ).fromNow(),
                                            };
                                          } else {
                                            this.nextShow = false;
                                          }
                                        } else {
                                          this.nextShow = false;
                                        }
                                        this.isLoading = false;
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  }
}
