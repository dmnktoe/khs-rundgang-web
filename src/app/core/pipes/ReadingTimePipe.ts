import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'readingtime' })
export class ReadingTimePipe implements PipeTransform {
  transform(value: string) {
    let readingTimeMinutes = 1;

    if (value !== '') {
      const totalWords = value.trim().split(/\s+/g).length;
      const wordsPerSecond = 180 / 60;
      const totalReadingTimeSeconds = totalWords / wordsPerSecond;
      readingTimeMinutes = Math.floor(totalReadingTimeSeconds / 60);

      if (readingTimeMinutes >= 1) {
        return readingTimeMinutes;
      } else {
        return '< 1';
      }
    } else {
      return readingTimeMinutes;
    }
  }
}
