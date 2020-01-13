import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'LimitPipe' })
export class LimitPipe implements PipeTransform {
  public transform(items: [], limit: number) {
    return items.slice(0, limit);
  }
}
