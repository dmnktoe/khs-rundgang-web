import { Component } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { StreamState } from '../../interfaces/stream-state';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor(private audioService: AudioService) {
    // listen to stream state
    this.audioService.getState()
        .subscribe(state => {
          this.state = state;
        });
  }

  playStream(url:string, title:string, image:string) {
    this.audioService.playStream(url, title, image)
        .subscribe(events => {
          // listening for fun here
        });
  }

  openFile(file:any, index:number) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url, file.name, this.defaultImage);
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

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change:Event) {
    this.audioService.seekTo(change.target["value"]);
  }
}