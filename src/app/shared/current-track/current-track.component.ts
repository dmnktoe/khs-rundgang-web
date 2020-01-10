import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-current-track',
  templateUrl: './current-track.component.html',
  styleUrls: ['./current-track.component.scss']
})
export class CurrentTrackComponent implements OnInit {
  current: any;
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
    this.value = 'play-circle';
    /* this.apiService.getCurrentTrackLive().subscribe((current: any) => {
      this.current = current;
      this.isLoading = false;
    });*/
  }
}
