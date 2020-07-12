import { Component } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { StreamState } from '../../interfaces/stream-state';
import { trigger, style, animate, transition } from '@angular/animations';
export type FadeState = 'visible' | 'hidden';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({transform: 'translateY(100%)', opacity: 0}),
        animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateY(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class PlayerComponent {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor(private audioService: AudioService) {
    // listen to stream state
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  playStream(url: string, detailUrl: string, title: string, image: string) {
    this.audioService
      .playStream(url, detailUrl, title, image)
      .subscribe((events) => {
        // listening for fun here
      });
  }

  openFile(file: any, index: number) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url, file.detailUrl, file.name, this.defaultImage);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  
  hide() {
    this.audioService.hide();
    this.state.hidden = true;
  }
  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change: Event) {
    this.audioService.seekTo(change.target['value']);
  }
}
