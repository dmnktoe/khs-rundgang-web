import { Artist } from './Artist';
import { Genre } from './Genre';
import { Show } from './Show';

export class Recording {
  artists: Artist;
  audio: string;
  createdAt: Date;
  description: string;
  genres: Genre;
  image: string;
  show: Show;
  slug: string;
  timeEnd: Date;
  timeStart: Date;
  title: string;
  updatedAt: Date;
  _id: string;
}
